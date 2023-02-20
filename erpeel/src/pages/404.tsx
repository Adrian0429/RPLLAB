import React from "react";
import Image from "next/image";
import imageerror from "public/assets/404.jpg";
import Link from "next/link";

interface Props {}

interface State {
  message: string;
}

//stateful class
//better pake fuctional comp. + hooks
class Custom404 extends React.Component<Props, State> {
  timer: NodeJS.Timeout | undefined;
  constructor(props: Props) {
    super(props);
    this.state = {
      message: "Page not found",
    };
  }

  componentDidMount() {
    //timer duration == 3detik
    const delayInSeconds = 3;
    let countDown = delayInSeconds;
  
    const timerId = setInterval(() => {
      if (countDown === 0) {
        this.setState({
          message: "Tapi Boong, pencet yang dibawah yak buat balik :) belom belajar buat itu",
        });
        clearInterval(timerId);
      } else {
        this.setState({
          message: `Page not found, Redirecting you back to the home page in ${countDown} seconds.`,
        });
        countDown -= 1;
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    return (
      <div className='flex flex-col items-center justify-center min-h-screen py-6'>
        <h1 className='mb-4 text-4xl font-bold text-gray-800 text-center'>
          {this.state.message}
        </h1>
        <Image
          src={imageerror}
          alt="/"
          height={500}
          className='w-full pt-16 mt-4'
        />
        <p className=' text-gray-700 mt-6 text-center text-3xl font-semibold'>Please check the URL and try again. <br/>
          <span>
            {" "}
            
            {/* <a> untuk ke web lain (keluar web)</a> Link untuk didalam page */}
            <Link href="/" className='text-center text-blue-500'>click here</Link> to go back
          </span>
        </p>
      </div>
    );
  }
}

export default Custom404;
