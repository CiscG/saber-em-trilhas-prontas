
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Upload } from "lucide-react";
import ResourceUploadDialog from "./ResourceUploadDialog";

interface LibraryHeaderProps {
  isUploadOpen: boolean;
  setIsUploadOpen: (open: boolean) => void;
}

const LibraryHeader = ({ isUploadOpen, setIsUploadOpen }: LibraryHeaderProps) => {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Biblioteca de Recursos Pedagógicos
          </h1>
          <p className="text-gray-600">
            Materiais prontos para o Ensino Fundamental (1º ao 9º ano)
          </p>
        </div>
        
        <Dialog open={isUploadOpen} onOpenChange={setIsUploadOpen}>
          <DialogTrigger asChild>
            <Button className="bg-edu-primary hover:bg-edu-primary/90">
              <Upload className="h-4 w-4 mr-2" />
              Enviar Recurso
            </Button>
          </DialogTrigger>
          <ResourceUploadDialog onClose={() => setIsUploadOpen(false)} />
        </Dialog>
      </div>
    </div>
  );
};

export default LibraryHeader;
