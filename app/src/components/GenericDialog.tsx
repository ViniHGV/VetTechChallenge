import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { ReactElement, ReactNode } from "react";

interface IGenericDialog {
  buttonOpenDiolog: ReactElement;
  title: string;
  description: string;
  children?: ReactNode;
  ButtonsFooter: ReactElement;
}

export function GenericDialog({
  buttonOpenDiolog,
  title,
  description,
  children,
  ButtonsFooter,
}: IGenericDialog) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{buttonOpenDiolog}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
          {children}
        </AlertDialogHeader>
        <AlertDialogFooter>{ButtonsFooter}</AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
