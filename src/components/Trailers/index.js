import React, {useState} from 'react';
import ModalVideo from 'react-modal-video'


const Trailers = ({id}) => {
    const [isOpen, setOpen] = useState(false)

    return (
        <div>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={id} onClose={() => setOpen(false)} />
            <button className="btn-primary video-btn" onClick={()=> setOpen(true)}>VIEW DEMO</button>
        </div>

    )};

export default Trailers;