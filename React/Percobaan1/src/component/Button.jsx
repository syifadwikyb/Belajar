export default function BorderButton({text, onClick = () => {}, type = "button"}) {
    return(
        <div>
            <button className="h-10 px-6 font-semibold rounded-md text-white bg-blue-700 w-full" 
            type={type}
            onClick={onClick}
            >
                {text}
            </button>            
        </div>
    )
}