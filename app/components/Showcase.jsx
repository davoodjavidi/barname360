"use client";
import { MoveLeft, ShieldUser } from "lucide-react";
import Image from "next/image";
import { motion } from "motion/react";

function Showcase() {
  return (
    <div className="flex flex-col-reverse lg:flex-row text-center mx-auto bg-[#1F2023] items-center justify-between h-8/10 w-11/12 py-10 px-20 rounded-xl gap-4 lg:gap-0">
      <div className="flex flex-col gap-6 justify-center items-center">
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-sm font-bold text-2xl leading-10 lg:text-4xl lg:leading-14"
        >
          سامانه مدیریت مرکز مشاوره تحصیلی و آموزشگاه کنکور
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-sm text-md lg:text-xl leading-8 lg:leading-10 font-medium"
        >
          با وب اپلیکیشن برنامه ۳۶۰ فروش تا پشتیبانی سایت خود را متحول کنید
        </motion.h1>

        <div className="flex flex-col lg:flex-row gap-4 justify-center items-center font-light">
          <motion.a
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.4 }}
            href="#"
            className="bg-green-700 p-3 flex rounded-full gap-1 hover:bg-green-800 transition duration-300"
          >
            مشاهده دمو دانش آموز
            <MoveLeft />
          </motion.a>

          <motion.a
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            href="#"
            className="flex border rounded-full p-3 gap-1 hover:bg-gray-500 transition duration-300"
          >
            مشاهده دمو پنل مدیریت
            <ShieldUser />
          </motion.a>
        </div>
      </div>

      <div className="">
        <Image
          src="/showcase.jpg"
          width={500}
          height={400}
          alt="Picture of the author"
        />
      </div>
    </div>
  );
}

export default Showcase;
