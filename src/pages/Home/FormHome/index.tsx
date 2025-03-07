import { FormContainer } from "./style";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { IoMdTrash } from "react-icons/io";

const schema = z.object({
  clientId: z.string().min(1, "Client ID is required"),
  details: z.string().min(1, "Details are required"),
  state: z.string().min(1, "State is required"),
  largeImageKey: z.string().optional(),
  largeImageText: z.string().optional(),
  smallImageKey: z.string().optional(),
  smallImageText: z.string().optional(),
});

type Inputs = z.infer<typeof schema>;
type FormData = Inputs & { id: number };

export function FormHome() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

  const formDataList: FormData[] = JSON.parse(localStorage.getItem('formData') || '[]')
  .map((item: Inputs, index: number) => ({ ...item, id: index }));
  const [selectedFormData, setSelectedFormData] = useState<FormData | {}>({});

  const handleSelectFormData = (item: FormData) => {
    setSelectedFormData(state => (state as FormData).id === item.id ? {} : item);
  };

  const handleStartRpc = () => {
    if (Object.keys(selectedFormData).length !== 0) {
      window.Main.startRpc(selectedFormData as FormData);
    } else {
      alert("selecione um item");
    }
  };

  const handleDeleteFormData = (id: number) => {
    const updatedData = formDataList.filter(item => item.id !== id);
    localStorage.setItem('formData', JSON.stringify(updatedData));
    setSelectedFormData({});
  };

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    // Remove empty optional fields
    const cleanedData = Object.fromEntries(
      Object.entries(data).filter(([_, v]) => v !== undefined && v !== "")
    );

    console.log(cleanedData);
    window.Main.startRpc(cleanedData);
    const existingData: Inputs[] = JSON.parse(localStorage.getItem('formData') || '[]');
    existingData.push(cleanedData);
    localStorage.setItem('formData', JSON.stringify(existingData));
  };

  return (
    <FormContainer>   
      <form onSubmit={handleSubmit(onSubmit)}>
        <header className="subHeader">
          <h2>Cadastre um rich presence</h2>
          <p>Adicione as informações para cadastrar um Rich Presence</p>
        </header>
        <div className="formArea">
          <div className="inputForm">
            <div className="inputField">
              <label>Client ID</label>
              <input {...register("clientId")} placeholder="Your client id"/>
              {errors.clientId && <span>{errors.clientId.message}</span>}
              <p>Enter the unique client ID provided by the service.</p>
            </div>
            <div className="inputField">
              <label>Details</label>
              <input {...register("details")} placeholder="Your details"/>
              {errors.details && <span>{errors.details.message}</span>}
              <p>Provide detailed information about the client.</p>
            </div>
            <div className="inputField">
              <label>State</label>
              <input {...register("state")} placeholder="Your state"/>
              {errors.state && <span>{errors.state.message}</span>}
              <p>Specify the current state or status of the client.</p>
            </div>
          </div>
          <div className="inputForm">
            <div className="inputField">
              <label>Large Image Key</label>
              <input {...register("largeImageKey")} placeholder="Your image key"/>
              <p>Enter the key for the large image to be displayed.</p>
            </div>
            <div className="inputField">
              <label>Large Image Text</label>
              <input {...register("largeImageText")} placeholder="Your image texte"/>
              <p>Provide a description for the large image.</p>
            </div>
          </div>
          <div className="inputForm">
            <div className="inputField">
              <label>Small Image Key</label>
              <input {...register("smallImageKey")} placeholder="Your image key"/>
              <p>Enter the key for the small image to be displayed.</p>
            </div>
            <div className="inputField">
              <label>Small Image Text</label>
              <input {...register("smallImageText")} placeholder="Your image texte"/>
              <p>Provide a description for the small image.</p>
            </div>
          </div>
        </div>
        <button>
          Creat rich presence
        </button>
      </form>
      <div className="formDataList">
        <header className="subHeader">
          <h2>Lista de Rich Presence criados</h2>
          <p>Selecione um Rich Presence e clique em start para iniciar</p>
        </header>
        <ul>
          {formDataList.map((item) => (
            <li
              key={item.id}
              onClick={() => handleSelectFormData(item)}
              className={(selectedFormData as FormData).id === item.id ? 'selected' : ''}
            >
              <strong>Client ID:</strong> <div className='clientId'>{item.clientId}</div>
              <strong> Details:</strong> {item.details}
              <button onClick={() => handleDeleteFormData(item.id)}>
                <IoMdTrash />
              </button>
            </li>
          ))}
        </ul>
        <div className='actionsArea'>
          <button onClick={handleStartRpc}>
            Start
          </button>
          <button onClick={window.Main.stopRpc}>
            Stop
          </button>
        </div>
      </div>
    </FormContainer>
  );
}