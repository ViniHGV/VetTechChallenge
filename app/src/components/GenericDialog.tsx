import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { ReactElement } from "react";

interface IGenericDialog {
  buttonOpenDiolog: ReactElement;
  title: string;
  description: string;
  ButtonsFooter: ReactElement;
}

export function GenericDialog({
  buttonOpenDiolog,
  title,
  description,
  ButtonsFooter,
}: IGenericDialog) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{buttonOpenDiolog}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>{ButtonsFooter}</AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
