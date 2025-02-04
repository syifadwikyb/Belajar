export default function BorderButton({text}) {
    return(
        <div>
            <button className="h-10 px-6 font-semibold rounded-md text-white bg-blue-700 w-full" type="submit">
                {text}
            </button>            
        </div>
    )
}