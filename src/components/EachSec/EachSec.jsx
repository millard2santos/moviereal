

const EachSec = ({name}) => {




    return (
        <div className="relative flex gap-3 py-3 items-center hover:scale-105 transition-transform duration-100ms cursor-pointer">
            <i className="fa-solid fa-image"></i>
            <p>{name}</p>
        </div>
    )
}

export default EachSec