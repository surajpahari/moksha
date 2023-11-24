export const ContentSection = (
  { title, subTitle, tagLine, content }: { title: string, subTitle: any, tagLine: any, content: any }
) => {
  console.log(title)
  return (
    <>
      <div className="bg-white py-24">
        <div>
          {/*header and intro for the services*/}
          <div className="w-full flex justify-center">
            <div>
              <div className="mb-10 text-center text-sm text-orange-500 font-medium">
                {title}
              </div>
              <div className="mb-14">
                <div className="text-center font-[450] mb-2 text-2xl text-moksha-black">
                  {subTitle}
                </div>
                <div className="text-center text-sm text-gray-500">
                  {tagLine}
                </div>
              </div>
            </div>
          </div>
          {/*services card*/}
          <div className="mt-16">
            <div className="p-2 flex items-center justify-center">
              {content}
            </div>
            <div className="text-center text-gray-600 text-xs mt-10">
              SHOW MORE
            </div>
          </div>
        </div>
      </div >

    </>
  )
}

export default ContentSection 
