"use client";
import { motion } from "motion/react";
import lms from "@/public/lms.jpg";
import { CircleChevronLeft } from "lucide-react";
import Image from "next/image";

function LmsSection() {
  return (
    <div className="w-full py-10">
      <div className="flex mx-auto w-10/12 items-center justify-around">
        <div className="p-10">
          <h1 className="text-2xl font-semibold mb-4">سامانه مدیریت آموزشی</h1>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-2">
            <li className="border border-gray-400  group p-4 rounded-md flex gap-2 items-center hover:bg-gray-100 transition duration-300  cursor-pointer max-w-sm min-w-[20%]">
              <CircleChevronLeft
                size={25}
                className="text-rose-500 group-hover:text-slate-800 transition duration-300"
              />
              <h4 className="text-md font-medium group-hover:text-slate-900">
                مدیریت محتوا و کلاس های درسی
              </h4>
            </li>
            <li className="border border-gray-400  group p-4 rounded-md flex gap-2 items-center hover:bg-gray-100 transition duration-300  cursor-pointer max-w-sm min-w-[20%]">
              <CircleChevronLeft
                size={25}
                className="text-rose-500 group-hover:text-slate-800 transition duration-300"
              />
              <h4 className="text-md font-medium group-hover:text-slate-900">
                رفع اشکال درسی
              </h4>
            </li>
            <li className="border border-gray-400  group p-4 rounded-md flex gap-2 items-center hover:bg-gray-100 transition duration-300  cursor-pointer max-w-sm min-w-[20%]">
              <CircleChevronLeft
                size={25}
                className="text-rose-500 group-hover:text-slate-800 transition duration-300"
              />
              <h4 className="text-md font-medium group-hover:text-slate-900">
                برگزاری کلاس آنلاین
              </h4>
            </li>
            <li className="border border-gray-400  group p-4 rounded-md flex gap-2 items-center hover:bg-gray-100 transition duration-300  cursor-pointer max-w-sm min-w-[20%]">
              <CircleChevronLeft
                size={25}
                className="text-rose-500 group-hover:text-slate-800 transition duration-300"
              />
              <h4 className="text-md font-medium group-hover:text-slate-900">
                برگزاری آزمون
              </h4>
            </li>
          </ul>
        </div>

        <motion.div
          initial={{ x: -25 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-xl"
        >
          <Image
            src={lms}
            alt="سامانه مدیریت آموزشی"
            placeholder="blur"
            quality={100}
            className="object-cover rounded-md"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default LmsSection;
