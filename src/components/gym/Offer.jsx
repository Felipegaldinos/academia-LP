import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';
import { Gift } from 'lucide-react';

const Offer = ({ scrollToForm }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Nome é obrigatório.';
    if (!formData.email.trim()) errors.email = 'E-mail é obrigatório.';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'E-mail inválido.';
    if (!formData.phone.trim()) errors.phone = 'Telefone é obrigatório.';
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    setFormErrors({});
    setFormData({ name: '', email: '', phone: '' });
    
    toast({
      title: "Agendamento Recebido!",
      description: "Nossa equipe entrará em contato em breve para confirmar sua aula experimental. Prepare-se!",
      className: "bg-yellow-400 text-black border-black",
    });
  };

  return (
    <section id="inscricao" className="section-padding bg-black">
      <div className="container mx-auto">
        <div className="bg-gray-900 border-2 border-yellow-400 p-8 md:p-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-4">
              <Gift className="w-12 h-12 text-yellow-400"/>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              GANHE <span className="text-yellow-400">7 DIAS GRÁTIS</span> + AVALIAÇÃO FÍSICA
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Preencha o formulário abaixo para agendar sua aula experimental. Sem compromisso, sem burocracia.
            </p>
            <div className="max-w-xl mx-auto">
              <form onSubmit={handleSubmit} noValidate>
                <div className="space-y-6 mb-6">
                  <div>
                    <label htmlFor="name" className="form-label">Nome Completo</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="form-input" required />
                    {formErrors.name && <p className="form-error">{formErrors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="form-label">E-mail</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="form-input" required />
                    {formErrors.email && <p className="form-error">{formErrors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="phone" className="form-label">Telefone / WhatsApp</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="form-input" required />
                    {formErrors.phone && <p className="form-error">{formErrors.phone}</p>}
                  </div>
                </div>
                <button type="submit" className="btn-cta btn-yellow">
                  Agendar Aula Grátis
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Offer;