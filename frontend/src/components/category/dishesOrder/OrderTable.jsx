import React, { useState } from 'react';
import { MdArrowBackIos } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Category from '../Category';

export default function OrderTable() {
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [callOption, setCallOption] = useState('');
  const [dataAgreement, setDataAgreement] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  ///////// Функисия для верификация инпута ///////////////
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'phone') {
      setPhone(value);
    }
    validateForm();
  };
/////////////////////////////////////////////////////////////


  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
    validateForm();
  };

  const handleCallOptionChange = (e) => {
    setCallOption(e.target.value);
    validateForm();
  };

  const handleDataAgreementChange = () => {
    setDataAgreement(!dataAgreement);
    validateForm();
  };

  const validateForm = () => {
    if (name.trim() !== '' && phone.trim() !== '' && paymentMethod !== '' && callOption !== '' && dataAgreement) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  const handleOrderConfirmation = () => {
    if (isFormValid) {
      setShowConfirmationModal(true);
    }
  };

  const handleCancelConfirmation = () => {
    setShowConfirmationModal(false);
  };

  const handleConfirmOrder = () => {
    setShowConfirmationModal(false);
    setShowSuccessModal(true);
  };

  const handleSuccessModalClose = () => {
    setShowSuccessModal(false);
  };

  return (
    <div className='bg-[#403C3B]'>
      <Category />
      <div className='px-[25%] text-white'>
        <Link to="/">
          <div className='flex text-white gap-2 py-8 pl-8'>
            <button className='p-1'><MdArrowBackIos className='text-white' /></button>
            <p>в главном</p>
          </div>
        </Link>
        <div className='flex items-center pl-8 py-8 bg-[#403C3B] text-4xl gap-5'>
          <div className="h-9 w-1 bg-green-400"></div>
          <h1 className="text-white font-bold">ОФОРМЛЕНИЕ СТОЛИК</h1>
        </div>

        <div className='bg-gray-700 p-4 mt-2 rounded-xl'>
          <p className='pb-2 font-bold'>1. Контактная информация</p>
          <div className='flex gap-5'>
            <input
              type="text"
              name="name"
              placeholder='Имя'
              className='bg-transparent border-2 border-gray-600 w-[40%] p-2'
              value={name}
              onChange={handleInputChange}
            />
            <input
              type="number"
              name="phone"
              placeholder='Телефон*'
              className='bg-transparent border-2 border-gray-600 w-[40%] p-2'
              value={phone}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className='bg-gray-700 p-4 mt-2 rounded-xl'>
          <p className='pb-2 font-bold'>2. Оплатить</p>
          <div className='flex gap-2'>
            <button
              className={`p-2 border-2 border-gray-500 rounded-xl ${paymentMethod === 'online' ? 'bg-green-400' : ''}`}
              value="online"
              onClick={handlePaymentMethodChange}
            >
              Оплата онлайн
            </button>
            <button
              className={`p-2 border-2 border-gray-500 rounded-xl ${paymentMethod === 'cash' ? 'bg-green-400' : ''}`}
              value="cash"
              onClick={handlePaymentMethodChange}
            >
              Наличными
            </button>
          </div>
          <div>
            <p className='p-2'>Хотите мы позвоним?</p>
            <div className='flex gap-5'>
              <input
                type='radio'
                name='call'
                value="no-call"
                checked={callOption === 'no-call'}
                onChange={handleCallOptionChange}
              />
              <p>Не перезванивать</p>
            </div>
            <div className='flex gap-5'>
              <input
                type='radio'
                name='call'
                value="call-operator"
                checked={callOption === 'call-operator'}
                onChange={handleCallOptionChange}
              />
              <p>Потребуется звонок оператора</p>
            </div>
          </div>
        </div>

        <div className='bg-gray-700 p-4 mt-2 flex justify-between rounded-xl'>
          <div className='flex gap-3 items-center'>
            <input
              type="checkbox"
              checked={dataAgreement}
              onChange={handleDataAgreementChange}
            />
            <p>Я согласен на обработку моих перс. данных</p>
          </div>
          <div>
            <button
              className={`bg-green-400 p-2 rounded-xl ${isFormValid ? '' : 'opacity-50 cursor-not-allowed'}`}
              onClick={handleOrderConfirmation}
              disabled={!isFormValid}
            >
              Оформить заказ
            </button>
            {!isFormValid && (
              <p className="text-red-500 mt-2">Заполните все поля</p>
            )}
          </div>
        </div>

      </div>

      {/* Подтверждение заказа модальное окно */}
      {showConfirmationModal && (
        <div className="fixed top-0 left-0 flex items-center justify-center w-screen h-screen bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-xl">
            <p className="text-center">
              Вы точно хотите продолжить для оформления заказа? Жмите на кнопку 'Ок'
            </p>
            <div className="flex justify-center mt-4">
              <button className="bg-green-400 p-2 rounded-xl" onClick={handleConfirmOrder}>
                Ок
              </button>
              <Link to='/'>
                <button className="bg-red-400 p-2 rounded-xl ml-4" onClick={handleCancelConfirmation}>
                  Отменить
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Заявка принята модальное окно */}
      {showSuccessModal && (
        <div className="fixed top-0 left-0 flex items-center justify-center w-screen h-screen bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-xl">
            <p className="text-center">
              Ваша заявка принята! Мы ждем вас. Спасибо за выбор.
            </p>
            <Link to='/'>
              <div className="flex justify-center mt-4">
                <button className="bg-green-400 p-2 rounded-xl" onClick={handleSuccessModalClose}>
                  Ок
                </button>
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
