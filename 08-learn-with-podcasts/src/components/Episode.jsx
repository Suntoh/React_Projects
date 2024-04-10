
function Episode({title,pubDate,link,mp3}) {
  return (
    <div className="flex flex-row border rounded-lg
    items-center py-4 max-w-full mx-6">

    <div className="flex flex-col mt-2 mb-4 pl-4
    gap-6 w-3/4 justify-center mx-auto ">
        <a href={link} target="_blank" rel="noopener
        noreferrer"
        className="underline hover:opaciity-80 hover:text-violet-600">
        <p className="text-xl">{title}</p>
        </a>
        <audio src={mp3} controls
        className="px-2 w-5/6" />
        <p>{pubDate}</p>
    </div>
    <div className="flex flex-col gap-1 my-2 w-2/5 max-w-xs px-3">
        <label htmlFor="notes"
        className="font-medium text-gray-700"
        >Notes</label>
        <textarea
        id="notes"
        className="border p-2 w-full"
        placeholder="What did you think of the episode?"
        rows={5}
         />
    </div>
    </div>
  )
}

export default Episode