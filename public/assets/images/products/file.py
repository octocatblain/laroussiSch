import os
from pathlib import Path

# Specify the folder to start the search
folder_path = 'your_directory_path_here'  # Replace with your folder path

def rename_png_files(directory):
    # Walk through all subdirectories and files in the given directory
    for root, _, files in os.walk(directory):
        for file_name in files:
            # Check if the file has a .PNG extension (case-sensitive)
            if file_name.endswith('.PNG'):
                old_file_path = Path(root) / file_name
                new_file_path = old_file_path.with_suffix('.png')
                
                # Rename the file
                old_file_path.rename(new_file_path)
                print(f'Renamed: {old_file_path} to {new_file_path}')

# Run the function
# Correct path format with double backslashes
rename_png_files("C:\\Users\\USER\\Desktop\\extras\\laroucci-master\\src\\images\\products")
