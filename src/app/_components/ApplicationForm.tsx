import React from 'react';

import Input from "@/app/_components/ui/Input";
import Button from "@/app/_components/ui/Button";

const ApplicationForm = () => {
  return (
    <form>
      <div className="text-h3 mb-10">Залишити заявку</div>
      <Input
        label="Ваше ім'я"
        placeholder="Ім'я"
        className="mb-8"
      />
      <Input
        label="Контактний телефон"
        placeholder="Телефон"
        className="mb-8"
      />
      <Input
        label="Кількість учасників"
        placeholder="Кількість учасників"
      />
      <Button className="bg-orange hover:bg-orange/90 transition-colors mt-12">
        Відправити заявку
      </Button>
    </form>
  );
};

export default ApplicationForm;