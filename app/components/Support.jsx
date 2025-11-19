"use client";
import { motion } from "motion/react";
import chat from "@/public/chat.jpg";
import { CircleChevronLeft } from "lucide-react";
import Image from "next/image";

function Support() {
  return (
    <div className="w-full py-10 bg-gray-200">
      <div className="flex mx-auto w-10/12 items-center justify-around">
        <motion.div
          initial={{ x: 25 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-xl"
        >
          <Image
            src={chat}
            alt="سامانه مدیریت آموزشی"
            placeholder="blur"
            quality={80}
            className="object-cover rounded-md"
          />
        </motion.div>

        <div className="p-10">
          <h1 className="text-2xl font-semibold mb-4 text-slate-800">
            پشتیبانی / ارتباط
          </h1>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-2">
            <li className="border border-gray-400  group p-4 rounded-md flex gap-2 items-center hover:bg-gray-100 transition duration-300  cursor-pointer max-w-sm min-w-[20%]">
              <CircleChevronLeft
                size={25}
                className="text-green-500 group-hover:text-slate-800 transition duration-300"
              />
              <h4 className=" text-slate-800 text-md font-medium group-hover:text-slate-900">
                سیستم چت داخلی
              </h4>
            </li>
            <li className="border border-gray-400  group p-4 rounded-md flex gap-2 items-center hover:bg-gray-100 transition duration-300  cursor-pointer max-w-sm min-w-[20%]">
              <CircleChevronLeft
                size={25}
                className="text-green-500 group-hover:text-slate-800 transition duration-300"
              />
              <h4 className=" text-slate-800 text-md font-medium group-hover:text-slate-900">
                انواع راه های ارتباطی (پیامک، notification و …)
              </h4>
            </li>
            <li className="border border-gray-400  group p-4 rounded-md flex gap-2 items-center hover:bg-gray-100 transition duration-300  cursor-pointer max-w-sm min-w-[20%]">
              <CircleChevronLeft
                size={25}
                className="text-green-500 group-hover:text-slate-800 transition duration-300"
              />
              <h4 className=" text-slate-800 text-md font-medium group-hover:text-slate-900">
                پرونده شخصی دانش آموز
              </h4>
            </li>
            <li className="border border-gray-400  group p-4 rounded-md flex gap-2 items-center hover:bg-gray-100 transition duration-300  cursor-pointer max-w-sm min-w-[20%]">
              <CircleChevronLeft
                size={25}
                className="text-green-500 group-hover:text-slate-800 transition duration-300"
              />
              <h4 className=" text-slate-800 text-md font-medium group-hover:text-slate-900">
                ارسال پیام های خودکار براساس عملکرد دانش آموز
              </h4>
            </li>
            <li className="border border-gray-400  group p-4 rounded-md flex gap-2 items-center hover:bg-gray-100 transition duration-300  cursor-pointer max-w-sm min-w-[20%]">
              <CircleChevronLeft
                size={25}
                className="text-green-500 group-hover:text-slate-800 transition duration-300"
              />
              <h4 className=" text-slate-800 text-md font-medium group-hover:text-slate-900">
                ایجاد فرآیندهای عملیاتی بعد از خرید دانش آموز
              </h4>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Support;
