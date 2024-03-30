const Feed = ({title , link ,date}) =>{

    let formatted = {year:"numeric",month:"long", day:"numeric"}
        let articleDate = new Date(date).toLocaleDateString("ja-JP-u-ca-japanese",formatted)
    return(
        <div className="flex flex-col py-4 border border-red-50 rounded-lg">
            <a href={link} target="_blank"
            rel = "nooper noreferrer"
            className="hover:text-pink-300">
                
            <h3 className="text-2xl mb-1
            underline decoration-red-300">{title}</h3>
            <p className="text-xl items-end">{articleDate}</p>
            </a>
        </div>
    )
}

export default Feed;