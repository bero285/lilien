import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface DropDownProps {
  title: string;
  text: string;
  isOpen: boolean;
  onToggle: () => void;
}

export default function DropDown({ title, text, isOpen, onToggle }: DropDownProps) {
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={onToggle}
        className="w-full py-4 flex items-center justify-between text-left focus:outline-none"
      >
        <span className="text-xl font-medium">{title}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="pb-4 text-gray-600 leading-relaxed">{text}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}