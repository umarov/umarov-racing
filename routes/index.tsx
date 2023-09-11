export default function Home() {
  return (
    <div class="px-4 py-4 mx-auto">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center py-4">
        <h1 class="text-3xl">Umarov Racing</h1>
      </div>

      <div class="flex flex-col bg-[#2f3dab] p-2 text-gray-50">
        <p class="text-xl">
          My name is Muzafar Umarov
        </p>

        <div className="flex items-center justify-center ">
          <p>
            I drive a 2023 Hyundai Elantra N
          </p>

          <img src="./elantran640.webp" alt="Elantra N" />
        </div>
      </div>
    </div>
  );
}
