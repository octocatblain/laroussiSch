import { options } from "@/app/api/auth/[...nextauth]/options";
import LoginForm from '@/components/LoginForm';
import { getServerSession } from "next-auth";

const LoginPage = async () => {

    const session: any = await getServerSession(options);
    return (
        <div>
            <LoginForm session={session} />
        </div>
    );
};

export default LoginPage;
