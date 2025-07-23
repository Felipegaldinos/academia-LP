import React from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, ShieldCheck, Users, Clock } from 'lucide-react';

const benefitsList = [
  { icon: <Dumbbell className="w-10 h-10 text-yellow-400" />, text: "Equipamentos de última geração" },
  { icon: <ShieldCheck className="w-10 h-10 text-yellow-400" />, text: "Personal Trainers certificados" },
  { icon: <Users className="w-10 h-10 text-yellow-400" />, text: "Aulas coletivas inclusas" },
  { icon: <Clock className="w-10 h-10 text-yellow-400" />, text: "Ambiente 24h com segurança" },
];

const Benefits = () => {
  return (
    <section className="bg-gray-900 section-padding">
      <div className="container mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {benefitsList.map((benefit, index) => (
            <motion.div
              key={index}
              className="text-center p-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex justify-center items-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-bold text-white">{benefit.text}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;