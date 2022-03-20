const Overlay = () => {
    const myImg = '/static/images/wallpaper.jpg';

    return (
        <>
            <div
                style={
                    {
                        justifyContent: 'center',
                        alignContent: 'center',
                        alignItems: 'center',
                        border: '1px solid red',
                        height: 500,
                        width: 600,

                    }
                }
            >
                <div className="image">
                    <div
                        style={
                            {
                                position: 'absolute',
                                opacity: 1,
                                '&:hover': {
                                    opacity: 0.1,
                                },
                            }
                        }
                    >

                        <img height={500} width={600} alt="wallpaper" src={myImg}
                            style={
                                {
                                    zIndex: -1,
                                }
                            }
                        />
                    </div>
                    <div
                        style={
                            {
                                position: 'relative',
                            }
                        }
                    >
                        Hello Prakash
                    </div>
                </div>
            </div>
        </>
    );
}
export default Overlay;