"use client";

import { motion } from "motion/react";
import Image from "next/image";
import testBuilder from "@/public/testbuilder.jpg";
import { FilePen } from "lucide-react";

function TestBuider() {
  return (
    <div className="w-full mx-auto py-10 bg-gray-200">
      <div className="flex flex-row-reverse mx-auto w-10/12 justify-center items-center">
        <div className="min-w-xs flex justify-end self-stretch  items-end">
          <ul className="grid grid-cols-1 gap-2">
            <motion.li
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.4 }}
              className="border border-gray-800 p-4 rounded-md flex flex-col gap-2 justify-center hover:bg-gray-300 transition duration-300 hover:shadow-[-2px_4px_0px_black] cursor-pointer max-w-xs"
            >
              <h4 className="text-md font-semibold mt-2 text-gray-900">
                آزمون تستی
              </h4>
              <p className="font-light text-sm mt-2 text-gray-800">
                براساس ساختار کنکور
              </p>
            </motion.li>
            <motion.li
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="border border-gray-800 p-4 rounded-md flex flex-col gap-2 justify-center hover:bg-gray-300 transition duration-300 hover:shadow-[-2px_4px_0px_black] cursor-pointer max-w-xs"
            >
              <h4 className="text-md font-semibold mt-2 text-gray-900">
                آزمون تشریحی
              </h4>
              <p className="font-light text-sm mt-2 text-gray-800">
                براساس ساختار امتحان نهایی
              </p>
            </motion.li>
            <motion.li
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="border border-gray-800 p-4 rounded-md flex flex-col gap-2 justify-center hover:bg-gray-300 transition duration-300 hover:shadow-[-2px_4px_0px_black] cursor-pointer max-w-xs"
            >
              <h4 className="text-md font-semibold mt-2 text-gray-900">
                راه اندازی سریع آزمون
              </h4>
              <p className="font-light text-sm mt-2 text-gray-800">
                امکان شخصی سازی براساس ساختار مجموعه
              </p>
            </motion.li>
            <motion.li
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="border border-gray-800 p-4 rounded-md flex flex-col gap-2 justify-center hover:bg-gray-300 transition duration-300 hover:shadow-[-2px_4px_0px_black] cursor-pointer max-w-xs"
            >
              <h4 className="text-md font-semibold mt-2 text-gray-900">
                ایجاد به صورت تک سوال یا pdf
              </h4>
              <p className="font-light text-sm mt-2 text-gray-800">
                امکان شخصی سازی براساس ساختار مجموعه
              </p>
            </motion.li>
            <motion.li
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.4, delay: 0.8 }}
              className="border border-gray-800 p-4 rounded-md flex flex-col gap-2 justify-center hover:bg-gray-300 transition duration-300 hover:shadow-[-2px_4px_0px_black] cursor-pointer max-w-xs"
            >
              <h4 className="text-md font-semibold mt-2 text-gray-900">
                مخزن سوال
              </h4>
              <p className="font-light text-sm mt-2 text-gray-800">بزودی... </p>
            </motion.li>
          </ul>
        </div>
        <motion.div
          initial={{ x: 30 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex flex-col"
        >
          <div className="flex items-center gap-2">
            <FilePen className="text-green-800 size-6" />
            <h2 className="text-2xl leading-16 font-bold  text-black">
              آزمون ساز اختصاصی
            </h2>
          </div>

          <Image
            src={testBuilder}
            alt="Family sitting around a fire pit in front of cabin"
            placeholder="blur"
            quality={80}
            className="object-cover rounded-md shadow"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default TestBuider;
