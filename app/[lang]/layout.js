import Sidebar from "@/components/Sidebar"

function layout({params:{lang},children}) {
  return (
    <main>
            <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
              <Sidebar lang={lang}/>
              {children}
            </div>
          </main>
  )
}

export default layout
