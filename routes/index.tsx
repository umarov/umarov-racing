export default function Home() {
  return (
    <div class="container mx-auto">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center py-4 bg-[#db4f47]">
        <h1 class="text-3xl font-bold	 text-gray-50">Umarov Racing</h1>
      </div>

      <div class="flex flex-col p-2 text-gray-600">
        <div className="flex items-center columns-2 py-2">
          <img
            src="./vnshenandoah.webp"
            alt="Elantra N"
            style={{ width: "45%", height: "auto", alignSelf: "start" }}
          />
          <div class="pl-1">
            <p class="text-xl">
              My name is Muzafar Umarov
            </p>
            <p class="text-xl">
              I have been doing track days since 2016.
            </p>
          </div>
        </div>

        <div className="columns-1 rounded shadow-md p-2 flex flex-col items-center justify-center">
          <p className="text-xl font-medium">
            In 2023, I started to complete in Time Trials with
          </p>
          <img
            class="bg-white"
            style={{ height: "auto", width: "50%" }}
            src="./scca.png"
          />
          <img
            class="bg-white"
            style={{ height: "auto", width: "50%" }}
            src="./gridlife.png"
          />
        </div>

        <div className="flex items-center justify-center columns-2 py-2">
          <p class="text-3xl text-[#2f3dab]">
            I currently drive a 2023 Hyundai Elantra N
          </p>

          <img
            src="./elantran640.webp"
            alt="Elantra N"
            style={{ width: "50%", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
}
