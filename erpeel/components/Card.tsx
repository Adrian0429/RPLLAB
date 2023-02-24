import Image from "next/image";

interface cardprops {
    title: string;
    imageaddress: string;
    judul: string;
    content: string;
}

const Card = ({title, imageaddress, judul, content}:cardprops) => {
  return (
    <section>

      <div>
      <a href="#" className="group relative block bg-black">
      <Image
        alt='/'
        src={imageaddress}
        width='3024'
        height='3024'
        className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
      />
      </a>
      </div>
    

      <div className="relative p-4 sm:p-6 lg:p-8">
        <p className="text-lg font-bold uppercase tracking-widest text-pink-500">
          {judul}
        </p>

        <p className="text-xl font-bold text-white sm:text-2xl">{title}!</p>

        <div className="mt-32 sm:mt-48 lg:mt-64">
          <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
            <p className="text-sm text-white">
              {content}
            </p>
          </div>
        </div>
      </div>

  </section>
  );
};

export default Card;
