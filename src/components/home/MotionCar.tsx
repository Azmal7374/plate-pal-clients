
"use client";
import { Image } from "@nextui-org/react";
import { motion } from "framer-motion";
export default function MotionCar() {
  return (
    <motion.div
      initial={{ x: 50 }}
      animate={{ y: 40, x: 0 }}
      transition={{ ease: "easeOut", duration: 2 }}
      className="md:w-3/5 flex justify-end"
    >
      <Image
        alt="Card background"
        className="object-cover rounded-xl"
        src="https://img.freepik.com/premium-photo/shortbread-dough-baking-quiche-tart-ingredients-baking-form_220507-862.jpg?ga=GA1.1.1302518135.1720608685&semt=ais_hybrid"
      />
    </motion.div>
  );
}
