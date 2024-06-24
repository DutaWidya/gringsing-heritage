import os

def rename_files_to_lowercase(folder_path):
    try:
        for filename in os.listdir(folder_path):
            old_path = os.path.join(folder_path, filename)
            new_filename = " ".join(filename.split("_"))
            new_path = os.path.join(folder_path, new_filename)
            
            if old_path != new_path:
                os.rename(old_path, new_path)
                print(f'Renamed: {old_path} -> {new_path}')
            else:
                print(f'Already lowercase: {old_path}')
                
        print("All files have been renamed to lowercase.")
    except Exception as e:
        print(f'An error occurred: {e}')

# Ganti 'path/to/folder' dengan path folder yang ingin Anda proses
folder_path = 'C:/Users/TrisnaWahyudi/Desktop/Other/Duta/web-project/public/motif/'
rename_files_to_lowercase(folder_path)
