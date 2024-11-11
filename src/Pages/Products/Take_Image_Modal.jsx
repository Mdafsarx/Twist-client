import React from 'react';
import { Button, message, Upload } from 'antd';
import { RiImageAddFill } from 'react-icons/ri';
const { Dragger } = Upload;
import { UploadOutlined } from '@ant-design/icons';
import { MdOutlineFileUpload } from 'react-icons/md';


const props = {
    name: 'file',
    multiple: true,
    action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
    onChange(info) {
        const { status } = info.file;
        if (status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
    onDrop(e) {
        console.log('Dropped files', e.dataTransfer.files);
    },
};


export default function Take_Image_Modal() {

    return (
        <div>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="modal_2" className="modal">
                <div className="modal-box bg-gray-900 *:text-white ">
                    <form method="dialog">
                        <button className="text-white absolute right-2.5 top-2">✕</button>
                    </form>

                    <div className='text-center mb-5 space-y-1.5'>
                        <h3 className='text-xl font-bold'>Search by image</h3>
                        <p>Search and find  similar images instantly</p>
                    </div>

                    <Dragger className='' style={{ borderColor: '#80EEB4' }} {...props}>
                        <div className='flex justify-center'>
                            <RiImageAddFill className='text-4xl mb-1' />
                        </div>
                        <p className="font-medium my-1">Click or drag file to this area to upload</p>
                        <p className="font-medium">or</p>
                        <Upload {...props}>
                            <button className='gap-x-1 bg-[linear-gradient(110deg,#80EEB433,45%,#80EEB499,55%,#80EEB433)] bg-[length:200%_100%] rounded-sm py-1.5 px-3 text-[#80EEB4] border-[#80EEB4] border-[1px] hover:bg-[#80EEB466] animate-shine '> <p className='flex items-center gap-1'>
                                <MdOutlineFileUpload className='text-xl'/> Click to Upload
                            </p> 
                            </button>
                        </Upload>
                    </Dragger>
                </div>
            </dialog>
        </div>
    )
}
