import { Carousel } from "@material-tailwind/react";

export function CarouselDefault() {
  return (
    <div className="w-full">
      {" "}
      {/* Definindo um tamanho menor */}
      <Carousel
        transition={{ duration: 1 }}
        className="rounded-xl h-4/5 w-full max-w-screen overflow-hidden"
        navigation={false}
        loop={true}
        autoplay={true}
      >
        <div className="h-full">
          <div className="absolute bg-white flex items-center justify-center h-60 w-1/2 left-1/2 bottom-0 transform -translate-x-1/2 rounded-xl text-center">
            <p className="text-orange-500 text-6xl">Ajudando a sua empresa crescer</p>
          </div>
          <img
            src="https://st.depositphotos.com/1594308/3526/i/450/depositphotos_35269821-stock-photo-discussing-project.jpg"
            alt="Construction 1"
            className="h-full w-full object-cover"
          />
        </div>

        <img
          src="https://st.depositphotos.com/1907633/2378/i/380/depositphotos_23783565-stock-photo-businessman-hand-working-with-new.jpg"
          alt="Construction 2"
          className="h-full w-full object-cover"
        />
        <img
          src="https://st.depositphotos.com/1594308/4627/i/380/depositphotos_46271085-stock-photo-businessmen-pointing-at-touchpad.jpg"
          alt="Construction 3"
          className="h-full w-full object-cover"
        />
      </Carousel>
    </div>
  );
}
