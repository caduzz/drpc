import { useState, useEffect } from 'react';
import { HomeContainer } from './style';
import { FormHome } from './FormHome';
import { RichListHome } from './RichLIstHome';
import { Header } from '../../components/Header';
import { toast } from 'react-toastify';

type FormData = {
  id: number;
  clientId: string;
  details: string;
  state: string;
  largeImageKey?: string;
  largeImageText?: string;
  smallImageKey?: string;
  smallImageText?: string;
};

export function Home() {
  const [formDataList, setFormDataList] = useState<FormData[]>([]);
  const [selectedFormData, setSelectedFormData] = useState<FormData | {}>({});
  const [isRpcActive, setIsRpcActive] = useState(false);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('formData') || '[]');
    setFormDataList(storedData);
    const checkRpcStatus = async () => {
      const status = await window.Main.isRpcActive();
      setIsRpcActive(status);
    };
    checkRpcStatus();

    const handleShowToast = ({ type, message }: { type: string, message: string }) => {
     if(type === "success"){
      toast.success(message);
     }
     if(type === "error"){
      toast.error(message);
     }
    };

    window.Main.on("showToast", handleShowToast);

    return () => {
      window.Main.off("showToast", handleShowToast);
    };
  }, []);

  const handleSelectFormData = (item: FormData) => {
    setSelectedFormData(state => (state as FormData).id === item.id ? {} : item);
  };

  const handleStartRpc = () => {
    if (Object.keys(selectedFormData).length !== 0) {
      window.Main.startRpc(selectedFormData as FormData);
      setIsRpcActive(true);
    } else {
      toast.error("Please select an item to start.");
    }
  };

  const handleStopRpc = () => {
    window.Main.stopRpc();
    setIsRpcActive(false);
  };

  const handleDeleteFormData = (id: number) => {
    const updatedData = formDataList.filter(item => item.id !== id);
    localStorage.setItem('formData', JSON.stringify(updatedData));
    setFormDataList(updatedData);
    setSelectedFormData({});
    toast.success("Item deleted successfully!");
  };

  const handleAddFormData = (data: FormData) => {
    const updatedData = [...formDataList, data];
    localStorage.setItem('formData', JSON.stringify(updatedData));
    setFormDataList(updatedData);
  };

  return (
    <HomeContainer>
      <div className='main'>
        <div className='container'>
          <Header />
          <div className='content'>
            <FormHome onAddFormData={handleAddFormData} />
            <RichListHome
              formDataList={formDataList}
              selectedFormData={selectedFormData}
              onSelectFormData={handleSelectFormData}
              onDeleteFormData={handleDeleteFormData}
              onStartRpc={handleStartRpc}
              onStopRpc={handleStopRpc}
              isRpcActive={isRpcActive}
            />
          </div>
        </div>
      </div>
    </HomeContainer>
  );
}