"use client";
import { motion } from "framer-motion";

export default function TestMotion() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="p-2 bg-blue-500 text-white flex justify-center items-center text-sm"
    >
      FREE SHIPPING ON ORDERS OVER $100
    </motion.div>
  );
}