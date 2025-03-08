import { FormContainer } from "./style";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "react-toastify";
import { SubHeader } from "../../../components/SubHeader";

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

interface FormHomeProps {
  onAddFormData: (data: FormData) => void;
}

export function FormHome({ onAddFormData }: FormHomeProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const cleanedData = Object.fromEntries(
      Object.entries(data).filter(([_, v]) => v !== undefined && v !== "")
    ) as Inputs;

    const newFormData: FormData = { ...cleanedData, id: Date.now() };
    onAddFormData(newFormData);
    toast.success("Rich presence created successfully!");
  };

  return (
    <FormContainer>   
      <form onSubmit={handleSubmit(onSubmit)}>
        <SubHeader
          title="Cadastre um rich presence"
          subTitle="Adicione as informações para cadastrar um Rich Presence"
        />
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
              <input {...register("largeImageText")} placeholder="Your image text"/>
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
              <input {...register("smallImageText")} placeholder="Your image text"/>
              <p>Provide a description for the small image.</p>
            </div>
          </div>
        </div>
        <button>
          Create rich presence
        </button>
      </form>
    </FormContainer>
  );
}