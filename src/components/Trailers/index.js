import React, {useState} from 'react';
import ModalVideo from 'react-modal-video'


const Trailers = ({id}) => {
    const [isOpen, setOpen] = useState(false)

    return (
        <div>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={id} onClose={() => setOpen(false)} />
            <button className="btn-primary video-btn mt-2" onClick={()=> setOpen(true)}>VIDEO</button>
        </div>

    )};

export default Trailers;