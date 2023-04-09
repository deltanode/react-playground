const InternetErrorScreen = () => {
  return (
    <section className="w-screen h-screen fixed bottom-0 ">
      <div className=" w-screen h-screen bg-slate-200 opacity-60"></div>
      {/* <div className=" text-red-500 absolute top-[10%] left-[35%]">**You are Offline. Check Your internet connection</div> */}
      <div className="bg-red-900 text-white p-2 fixed bottom-0">**You are Offline. Check Your internet connection</div>
    </section>
  )
}

export default InternetErrorScreen
