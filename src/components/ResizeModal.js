import React, { useEffect, useState } from 'react';
import {
    Paper,
    makeStyles,
    withStyles,
    Divider,
} from '@material-ui/core';
/* import {
    Close as CloseIcon,
    Remove as RemoveIcon,
    WebAsset as WebAssetIcon
} from '@material-ui/icons'; */

import Draggable from 'react-draggable';
import { ResizableBox } from 'react-resizable';
import PropTypes from "prop-types";

const styles = (theme) => ({
    root: {
        cusor:'move',
        userSelect:'none',
    },
    title:{
        fontWeight:'bold'
    },
    closeButton:{
        position: 'fixed',
    },
    minimize:{
        position:'fixed',
    }
});

const ModalTitle = withStyles(styles)((props)=>{
    const { children, width, isMinimized, onMinimized, onClose, ...other} = props;
    return(
        <div className='' {...other} style={{width, display:'flex', justifyContent:'space-between'}}>{/* 여기에 나중에 css */}
            <h4>ResizeModal 타이틀 테스트</h4>
            <div>
                {onMinimized ? (
                    <button /* aria-label="close" */  onClick={onMinimized}>
                        {isMinimized ? <span>ㅁ</span> : <span>-</span>}
                    </button>
                ) : null}
                {onClose ? (
                    <button onClick={onClose}>x</button>
                ) : null}
            </div>
            
        </div>
    );
});

const useContentStyles= (width, height) => makeStyles((theme)=>({
    resizable: {
    	padding: theme.spacing(2),/* 안쪽 여백 패딩 */
        position: "relative",
        "& .react-resizable-handle": {
            position: "absolute",
            userSelect: 'none',
            /* width: 20, */
            width: 1,
            /* height: 20, */
            height: '100%',
            bottom: 0,
            right: 0,
            /* background:
                "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2IDYiIHN0eWxlPSJiYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmYwMCIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI2cHgiIGhlaWdodD0iNnB4Ij48ZyBvcGFjaXR5PSIwLjMwMiI+PHBhdGggZD0iTSA2IDYgTCAwIDYgTCAwIDQuMiBMIDQgNC4yIEwgNC4yIDQuMiBMIDQuMiAwIEwgNiAwIEwgNiA2IEwgNiA2IFoiIGZpbGw9IiMwMDAwMDAiLz48L2c+PC9zdmc+')",
            "background-position": "bottom right", */
            padding: "0 3px 3px 0",
            /* "background-repeat": "no-repeat", */
            /* "background-origin": "content-box", */
            "box-sizing": "border-box",
            cursor: "se-resize"
        }
    },
    content: {
        padding: theme.spacing(2),
        maxHeight: height,
        maxWidth: width
    }
}))

const ModalContent = ({ width, height, isResize, children }) => {
    const classes = useContentStyles(width, height)();
    return (
        <>
            {isResize ? (
                <ResizableBox
                    height={height}
                    width={width}
                    className={classes.resizable}
                >
                   {/*  {children} */}
                </ResizableBox>
            ) : (
                <Paper className={classes.content}>
                    {/* {children} */}
                </Paper>
            )}
        </>
 
    );
};

const PaperComponent = (props) => {
    return (
        <Draggable handle="#draggable-modal-title">
            <Paper {...props} />
        </Draggable>
    );
};

const useStyles = makeStyles((theme) => ({
    modal: {
        position: 'fixed',
        top: '10%',
        left: '10%',
        zIndex: 1300,
        userSelect: 'none',
    },
}));

const Modal = ({/*  title, children,  */width, height, isResize, onClose }) => {
    const classes = useStyles();
    const [isMinimized, setIsMinimized] = useState(false);
 
    const handleMinimized = evt => {
        setIsMinimized(!isMinimized);
    };
 
    useEffect(() => {
        return () => {}
    }, []);
 
    return (
        <PaperComponent className={classes.modal}>
            <ModalTitle
                id="draggable-modal-title"
                onClose={onClose}
                /* width={width} */
                isMinimized={isMinimized} /* 최소화하고 되돌리는 아이콘 */
                onMinimized={handleMinimized}/* 사이즈조절 */
            >
                {/* {title} */}
            </ModalTitle>
            <Divider/>{/* hr 기능 */}
            {!isMinimized && (
                <ModalContent
                    width={width}
                    height={height}
                    isResize={isResize}
                >
                    {/* {children} */}
                </ModalContent>
            )}
        </PaperComponent>
    );
};

const ResizeModal = ({open, ...other}) => {
    return (
        <>
            {open && (
                <Modal {...other} />
            )}
        </>
    );
};
/* 지워도 무방 */
ResizeModal.defaultProps = {
    title: '목록',
    isResize: false,
    width: 500,
    height: 500
};
/* 지워도 무방 */ 
// property 의 타입 지정
ResizeModal.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func,
    isResize: PropTypes.bool,
    width: PropTypes.number,
    height: PropTypes.number,
};

export default ResizeModal;
