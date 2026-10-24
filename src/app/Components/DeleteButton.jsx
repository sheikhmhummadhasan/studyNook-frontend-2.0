"use client";
import { AlertDialog, Button } from "@heroui/react";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";
import { authClient } from "../lib/auth-client";

const DeleteButton = ({ id }) => {
  const handelDelete = async () => {
      const { data, error } = await authClient.token();
    const prom = await fetch(`${process.env.SURVER_URI}/studynook/${id}`, {
      headers: {
        authorization: `Bearer ${data?.token}`,
      },
      method: "DELETE",
    });
    const res = await prom.json();
    toast.success(`Room's Delete successfully...`);
    redirect("/");
  };
  return (
    <div>
      <AlertDialog>
        <Button variant="danger">Delete</Button>
        <AlertDialog.Backdrop>
          <AlertDialog.Container>
            <AlertDialog.Dialog className="sm:max-w-[400px]">
              <AlertDialog.CloseTrigger />
              <AlertDialog.Header>
                <AlertDialog.Icon status="danger" />
                <AlertDialog.Heading>
                  Delete project permanently?
                </AlertDialog.Heading>
              </AlertDialog.Header>
              <AlertDialog.Body>
                <p>
                  This will permanently delete and all of its data. This action
                  cannot be undone.
                </p>
              </AlertDialog.Body>
              <AlertDialog.Footer>
                <Button slot="close" variant="tertiary">
                  Cancel
                </Button>
                <Button onClick={handelDelete} slot="close" variant="danger">
                  Delete Project
                </Button>
              </AlertDialog.Footer>
            </AlertDialog.Dialog>
          </AlertDialog.Container>
        </AlertDialog.Backdrop>
      </AlertDialog>
    </div>
  );
};

export default DeleteButton;