import React, { useState, useRef, useEffect } from 'react';
// import UserInfo from './UserInfo';
// import { Card, CardContent } from '../../ui/card';
import { CgProfile } from 'react-icons/cg';
import { TbSettingsPause } from 'react-icons/tb';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { FiMinusCircle } from 'react-icons/fi';
// import ChangeNameModal from '../../AdminModals/ChangeNameModal';
import ChangePasswordModal from '../../AdminModals/ChangePasswordModal';
import { Card, CardContent } from '../../ui/card';
import ChangeNameModal from '../../AdminModals/ChangeNameModal';
import UserInfo from './UserInfo';
// import CreateAdminModal from '../../AdminModals/CreateAdminModal';
// import DeleteAdminModal from '../../AdminModals/DeleteAdminModal';
// import ChangeNameModal from '../AdminModals/ChangeNameModal';

const AdminActionMenu = ({ size = 'xl', className = '' }) => {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = event => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const sizeMap = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
    xl: 'w-12 h-12',
  };

  const imageClass = sizeMap[size] || sizeMap['lg'];
  const [openModal, setOpenModal] = useState(null);
  const closeModal = () => setOpenModal(null);
  return (
    <div className="relative inline-block" ref={wrapperRef}>
      <div onClick={() => setOpen(!open)} className="cursor-pointer">
        <UserInfo size="lg" />
      </div>

      {/* Popup menu */}
      {open && (
        <Card className="absolute z-50 mt-2 w-64 right-0 shadow-lg">
          <CardContent className="space-y-1 p-2">
            <div
              className={`flex items-center justify-center mb-7 gap-2 ${className}`}
            >
              <img
                src="/image/profile.jpg"
                alt="profile"
                className={`${imageClass} rounded-full object-cover`}
              />
              <div className="text-left">
                <div className="font-dm font-[600] text-[20px] ">Shuvo</div>
                <div className="font-dm font-[300] text-[12px] text-gray-500">
                  Admin / (Admin ID)
                </div>
              </div>
            </div>

            <ActionItem
              icon={<CgProfile className="text-[18px]" />}
              label="Change Name"
              labelClass="font-dm font-[500] text-[16px]"
              onClick={() => {
                setOpen(false);
                setOpenModal('name');
              }}
            />
            <ActionItem
              icon={<TbSettingsPause className="text-[18px]" />}
              label="Change Password"
              labelClass="font-dm font-[400] text-[16px]"
              onClick={() => {
                setOpen(false);
                setOpenModal('password');
              }}
            />
          </CardContent>
        </Card>
      )}
      {/* Modals */}
      <ChangeNameModal isOpen={openModal === 'name'} onClose={closeModal} />
      <ChangePasswordModal
        isOpen={openModal === 'password'}
        onClose={closeModal}
      />
    </div>
  );
};

const ActionItem = ({ icon, label, onClick, labelClass = '' }) => (
  <div
    className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-gray-200 "
    onClick={onClick}
  >
    {icon && <span className="text-xl">{icon}</span>}
    <span className={`${labelClass}`}>{label}</span>
  </div>
);

export default AdminActionMenu;
