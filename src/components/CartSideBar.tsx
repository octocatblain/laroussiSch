'use client';

import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment, useEffect, useState } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { MdClose } from 'react-icons/md';

import ButtonCircle3 from '@/shared/Button/ButtonCircle3';
import ButtonPrimary from '@/shared/Button/ButtonPrimary';
import ButtonSecondary from '@/shared/Button/ButtonSecondary';
import InputNumber from '@/shared/InputNumber/InputNumber';

import { useCart } from '@/contexts/cartContext';
import { useSession } from '@/contexts/SessionContext';

export interface CartSideBarProps { }

const CartSideBar: React.FC<CartSideBarProps> = () => {
  const [isVisable, setIsVisable] = useState(false);
  const [loading, setLoading] = useState(false);
  const { cart, setCart } = useCart();
  const session: any = useSession();

  const handleOpenMenu = () => setIsVisable(true);
  const handleCloseMenu = () => setIsVisable(false);

  const fetchCartItems = async () => {
    setLoading(true);
    try {
      const userId = session?.user?.id;
      const response = await fetch(`/api/carts?userId=${userId}`, {
        headers: {
          Authorization: `Bearer ${session?.token}`,
        },
      });
      const data = await response.json();
      if (Array.isArray(data)) {
        setCart(
          data.map((item) => {
            const product = item.product || {};
            return {
              id: product.id || item.id,
              name: product.productName || 'Unknown Product',
              image: product.coverImage || '/assets/images/default.png',
              price: product.price || 0,
              quantity: item.quantity || 1,
              slug: product.slug || '',
            };
          })
        );
      } else {
        console.error('Unexpected data format:', data);
      }
    } catch (error) {
      console.error('Failed to fetch cart items:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  const handleRemoveItem = async (productId: string) => {
    try {
      await fetch(`/api/carts/${productId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('sessionToken')}`,
        },
      });
      setCart(cart.filter((item) => item.id !== productId));
      console.log(`Product ${productId} removed from cart`);
    } catch (error) {
      console.error('Failed to remove product from cart:', error);
    }
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const renderProduct = (item: any) => {
    const { id, name, price, slug, image, quantity } = item;

    return (
      <div key={id} className="flex py-5 last:pb-0">
        <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl">
          <Image
            width={1000}
            height={1000}
            src={image}
            alt={name}
            className="h-full w-full object-cover object-top"
          />
          <Link
            onClick={handleCloseMenu}
            className="absolute inset-0"
            href={`/products/${slug}`}
          />
        </div>

        <div className="ml-4 flex flex-1 flex-col justify-between">
          <div>
            <div className="flex justify-between">
              <h3 className="font-medium">
                <Link onClick={handleCloseMenu} href={`/products/${slug}`}>
                  {name}
                </Link>
              </h3>
              <span className="font-medium">${price?.toFixed(2)}</span>
            </div>
          </div>
          <div className="flex w-full items-end justify-between text-sm">
            <div className="flex items-center gap-3">
              <AiOutlineDelete
                className="text-2xl cursor-pointer"
                onClick={() => handleRemoveItem(id)}
              />
            </div>
            <div>
              <InputNumber defaultValue={quantity} />
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderContent = () => (
    <Transition appear show={isVisable} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 overflow-y-auto"
        onClose={handleCloseMenu}
      >
        <div className="z-max fixed inset-y-0 right-0 w-full max-w-md outline-none focus:outline-none md:max-w-md">
          <Transition.Child
            as={Fragment}
            enter="transition duration-100 transform"
            enterFrom="opacity-0 translate-x-full"
            enterTo="opacity-100 translate-x-0"
            leave="transition duration-150 transform"
            leaveFrom="opacity-100 translate-x-0"
            leaveTo="opacity-0 translate-x-full"
          >
            <div className="relative z-20">
              <div className="overflow-hidden shadow-lg ring-1 ring-black/5">
                <div className="relative h-screen bg-white">
                  <div className="hiddenScrollbar h-screen overflow-y-auto p-5">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold">Shopping cart</h3>
                      <ButtonCircle3 onClick={handleCloseMenu}>
                        <MdClose className="text-2xl" />
                      </ButtonCircle3>
                    </div>
                    <div className="divide-y divide-neutral-300">
                      {loading ? (
                        <p>Loading...</p>
                      ) : (
                        cart.map((item) => renderProduct(item))
                      )}
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full bg-neutral-50 p-5">
                    <p className="flex justify-between">
                      <span>
                        <span className="font-medium">Subtotal</span>
                        <span className="block text-sm text-neutral-500">
                          Shipping and taxes calculated at checkout.
                        </span>
                      </span>
                      <span className="text-xl font-medium">${subtotal.toFixed(2)}</span>
                    </p>
                    <div className="mt-5 flex items-center gap-5">
                      <ButtonPrimary
                        href="/checkout"
                        onClick={handleCloseMenu}
                        className="w-full flex-1"
                      >
                        Checkout
                      </ButtonPrimary>
                      <ButtonSecondary
                        onClick={handleCloseMenu}
                        href="/cart"
                        className="w-full flex-1 border-2 border-primary text-primary"
                      >
                        View cart
                      </ButtonSecondary>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter=" duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave=" duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-neutral-900/60" />
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );

  return (
    <>
      <button
        type="button"
        onClick={handleOpenMenu}
        className="focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
      >
        Cart ({totalItems})
      </button>
      {renderContent()}
    </>
  );
};

export default CartSideBar;
