
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import { useState } from 'react';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const UserProfileCard = ({ imgUrl, uploadIconColor, }) => {


    const [opacity, setOpacity] = useState(1);
    const onMouseEnterHandle = () => {
        setOpacity(0.3);
    }
    const onMouseLeaveHandle = () => {
        setOpacity(1);
    }
    const [open, setOpen] = useState(false);
    const onClickEdit = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [bgImage, setBgImage] = useState(null);
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        height: 300,
        bgcolor: 'background.paper',
        border: '1px solid #000',
        boxShadow: 24,
        p: 4,
    };
    const FormModal = () => {
        const handleChange = () => {
            const imgageFile = document.getElementById('userImage');
            const reader = new FileReader();
            console.log(reader);

        }
        return (
            <>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Uoload User Profile Image
                        </Typography>
                        <hr />
                        <div

                        >
                            <form encType='multipart/form-data'>
                                <input onChange={handleChange} id='userImage' type='file' name='userImage' />
                            </form>
                            <div

                                style={
                                    {
                                        height: "200px",
                                        width: "100%",
                                        border: "1px solid black",
                                        backgroundImage: bgImage ? bgImage : null,
                                    }
                                }
                            >

                            </div>
                        </div>

                        <div
                            style={
                                {
                                    display: 'flex',
                                    justifyContent: 'space-around',
                                    bottom: 0,
                                    position: 'absolute',
                                }
                            }
                        >
                            <div
                                style={
                                    {
                                        display: 'flex',
                                        justifyContent: 'space-around',
                                        alignItems: 'flex-start',
                                    }
                                }
                            >
                                <div>
                                    Rotate
                                </div>
                                <div>
                                    Zoom
                                </div>
                            </div>
                            <div style={
                                {
                                    display: 'flex',

                                    justifyContent: 'space-around',
                                    alignItems: 'flex-end'
                                }
                            }>
                                <div>
                                    <button>Cancel</button>
                                </div>
                                <div>
                                    <button type='submit'>Save</button>
                                </div>
                            </div>
                        </div>
                    </Box>
                </Modal>
            </>
        );
    }
    return (
        <>
            <FormModal />
            <IconButton
                sx={
                    {

                        position: 'absolute',
                        '&:hover': {
                            opacity: opacity,
                            transition: 'opacity 0.5s',
                        },
                        opacity: opacity,
                        transition: 'opacity 0.5s'
                    }
                }
            >
                <Avatar
                    src={imgUrl ? imgUrl : '/static/images/boy.jpg'}
                    alt='User profile'
                >
                </Avatar>
            </IconButton>
            <IconButton
                onMouseEnter={onMouseEnterHandle}
                onMouseLeave={onMouseLeaveHandle}
                onClick={onClickEdit}
                sx={
                    {
                        opacity: 0,
                        '&:hover': {
                            opacity: 1,
                            transition: 'opacity 0.5s',
                        }
                    }
                }
            >
                <Avatar
                    sx={
                        {
                            backgroundColor: 'transparent',
                        }
                    }
                >
                    <EditIcon
                        sx={
                            {
                                color: uploadIconColor ? uploadIconColor : '#5B5B5B',
                                position: 'relative',
                            }

                        }
                    />
                </Avatar>

            </IconButton>

        </>
    );
}
export default UserProfileCard;