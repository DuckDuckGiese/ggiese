import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col relative z-[2] grow-[2]">
      <div className='w-full'>
        <div>
          <section className="bg-[url('/assets/bg.jpeg')] bg-contain text-white py-[60px] grayscale block" >
            <div className="h-[1080px] w-full">
              <div className='px-[50px] mt-[200px]'>
                <img className="inline-block" src="/assets/GeorgeGiese.png" />
                <h2 className='mt-[-50px] text-center'>Amateur Photographer Extraordinaire</h2>
              </div>

            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
