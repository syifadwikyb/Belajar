export default function BorderButton({variant, text}) {
    return(
        <div>
            <button className={`h-10 px-6 font-semibold rounded-md text-white ${variant}`} type="submit">
                {text}
            </button>            
        </div>
    )
}