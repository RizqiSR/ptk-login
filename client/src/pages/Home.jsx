/* eslint-disable react/no-unescaped-entities */
export default function Home() {
  return (
    <div className="w-screen max-h-screen p-8 text-white flex flex-col justify-between items-center">
      <div className="text-center mb-64">
        <img src="./src/assets/ptk-logo.png"  alt="Pertamina Trans Kontinental Logo" className="w-[450px] mb-3" />
        <h1 className="text-3xl">Let's Digitalize</h1>
        <h1 className="text-3xl">Our Company with <span className="font-bold">PRIDE</span></h1>
      </div>

      <div className="flex flex-col gap-3 py-6">
        <img src="./public/img/on-google.png" alt="Download App on Google Play" className="h-[60px]" />
        <img src="./public/img/on-apple.png" alt="Download App on Google Play" className="h-[67px]" />
      </div>
      
    </div>
  )
}
