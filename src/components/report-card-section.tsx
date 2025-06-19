export const ReportCardSection = ({text,btnText}:{text:string,btnText:string}) => {
    return (
        <div className="flex justify-between items-center mt-5">
            <h3 className="text-md">{text}</h3>
            <button className="text-secondary bg-gradient-to-r from-fuchsia-300 to-violet-400 rounded-xl px-4 py-2">{btnText}</button>
        </div>
    )
}