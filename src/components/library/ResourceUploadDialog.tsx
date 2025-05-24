
import { Button } from "@/components/ui/button";
import { DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Upload, Plus } from "lucide-react";

interface ResourceUploadDialogProps {
  onClose: () => void;
}

const ResourceUploadDialog = ({ onClose }: ResourceUploadDialogProps) => {
  const disciplinas = [
    "Matemática", "Língua Portuguesa", "História", "Geografia", 
    "Ciências", "Educação Física", "Artes", "Inglês"
  ];

  const anos = ["1º ano", "2º ano", "3º ano", "4º ano", "5º ano", "6º ano", "7º ano", "8º ano", "9º ano"];

  return (
    <DialogContent className="max-w-2xl">
      <DialogHeader>
        <DialogTitle>Cadastrar Novo Recurso Pedagógico</DialogTitle>
      </DialogHeader>
      <div className="space-y-6 mt-4">
        <div>
          <Label htmlFor="nome">Nome do Recurso *</Label>
          <Input id="nome" placeholder="Digite o nome de identificação do recurso" />
        </div>
        
        <div>
          <Label htmlFor="descricao">Descrição Detalhada (Opcional)</Label>
          <Textarea 
            id="descricao" 
            placeholder="Descreva detalhadamente as informações do recurso..."
            rows={4}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="disciplina">Disciplina *</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Selecione a disciplina" />
              </SelectTrigger>
              <SelectContent>
                {disciplinas.map((disciplina) => (
                  <SelectItem key={disciplina} value={disciplina.toLowerCase()}>
                    {disciplina}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label htmlFor="ano">Ano *</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Selecione o ano" />
              </SelectTrigger>
              <SelectContent>
                {anos.map((ano) => (
                  <SelectItem key={ano} value={ano}>
                    {ano}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <Label htmlFor="tipo">Tipo de Material *</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Selecione o tipo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="gratuito">Gratuito</SelectItem>
              <SelectItem value="pago">Pago</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="arquivo">Arquivo do Material</Label>
          <div className="mt-2 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
            <Upload className="mx-auto h-12 w-12 text-gray-400" />
            <p className="mt-2 text-sm text-gray-600">
              Clique para enviar ou arraste o arquivo aqui
            </p>
            <p className="text-xs text-gray-500">PDF, DOC, DOCX, PPT, PPTX até 50MB</p>
          </div>
        </div>

        <div className="flex justify-end gap-3">
          <Button variant="outline" onClick={onClose}>
            Cancelar
          </Button>
          <Button className="bg-edu-primary hover:bg-edu-primary/90">
            <Plus className="h-4 w-4 mr-2" />
            Cadastrar Recurso
          </Button>
        </div>
      </div>
    </DialogContent>
  );
};

export default ResourceUploadDialog;
