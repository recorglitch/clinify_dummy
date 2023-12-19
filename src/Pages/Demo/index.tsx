import { Button, Grid, InputLabel, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { IconMailForward } from "@tabler/icons-react";
import { zodResolver } from "@hookform/resolvers/zod";
import {} from "tabler-icons-react";
import * as z from "zod";

// Define your form schema using zod
const checkCareGapFormSchemaSMS = z.object({
  content: z.string(),
});

const checkCareGapFormSchemaEmail = z.object({
  subject: z.string(),
  content: z.string(),
});

// Type to represent the form data
type CheckCareGapFormData = z.infer<
  typeof checkCareGapFormSchemaSMS | typeof checkCareGapFormSchemaEmail
>;

type contentTypes = "sms" | "email";

const CheckCareGapForm = () => {
  const [isOpenAddForm, setIsOpenAddForm] = useState(false);
  const [activeTab, setActiveTab] = useState<number>(0);
  const [contentType, setContentType] = useState<contentTypes>("sms");
  const [emailContent, setEmailContent] = useState<{
    subject: string;
    content: string;
  }>({ content: "", subject: "" });

  const [smsContent, setSmsContent] = useState<{ content: string }>({
    content: "",
  });

  const { register, handleSubmit, formState, control } =
    useForm<CheckCareGapFormData>({
      resolver:
        contentType === "email"
          ? zodResolver(checkCareGapFormSchemaEmail)
          : zodResolver(checkCareGapFormSchemaSMS),
      defaultValues:
        contentType === "email"
          ? {
              // Set default values if needed
              subject: "Welcome to [Clinify]!",
              content: `
      Hi [Name of the Patient], \n
      [Clinify] is trying to reach you. Please respond with a reply.\n
      Thanks and regards,
      [Care Team]
      `,
            }
          : { content: "This is a dummy sms" },
    });

  const onSubmit: SubmitHandler<CheckCareGapFormData> = (data) => {
    // Handle the form submission
    console.log("Form data submitted:", data);
    // You can add further logic here, such as API calls or state updates
  };

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    if (index === 0) {
      setContentType("sms");
      return;
    }
    setContentType("email");
  };

  return (
    <Grid container item xs={12} lg={6} rowGap={1}>
      <Grid item xs={12}>
        <Button
          size="small"
          onClick={() => {
            setIsOpenAddForm((prev) => !prev);
          }}
        >
          Send reminder
        </Button>
      </Grid>
      <Grid container item xs={12}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container item xs={12} rowGap={2} paddingBlock={"0.3rem"}>
            <Typography
              variant="body1"
              sx={{
                fontWeight: "bold",
                opacity: "0.8",
                paddingLeft: "0.2rem",
              }}
            >
              Send reminder
            </Typography>

            <Grid item xs={12}>
              <div
                style={{
                  border: "1px solid gray",
                  height: "2.5rem",
                  borderRadius: "5px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "0 1rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "0.5rem",
                    color: activeTab === 0 ? "blue" : "gray",
                    cursor: "pointer",
                  }}
                  onClick={() => handleTabClick(0)}
                >
                  <IconMailForward />
                  <Typography>SMS</Typography>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "0.5rem",
                    color: activeTab === 1 ? "blue" : "gray",
                    cursor: "pointer",
                  }}
                  onClick={() => handleTabClick(1)}
                >
                  <IconMailForward />
                  <Typography>Email</Typography>
                </div>
              </div>
            </Grid>
            {activeTab === 1 && (
              <Grid item xs={12}>
                <InputLabel
                  htmlFor="Subject"
                  sx={{
                    width: "max-content",
                    marginBottom: "0.25rem",
                    fontSize: "0.8125rem",
                    color: "#5d596c",
                    paddingLeft: "0.2rem",
                  }}
                >
                  Subject
                </InputLabel>
                <TextField
                  placeholder="write your subject here..."
                  size="small"
                  fullWidth
                  {...register("subject")}
                />
              </Grid>
            )}
            <Grid item xs={12}>
              <InputLabel
                htmlFor="Content"
                sx={{
                  width: "max-content",
                  marginBottom: "0.25rem",
                  fontSize: "0.8125rem",
                  color: "#5d596c",
                  paddingLeft: "0.2rem",
                }}
              >
                Content
              </InputLabel>
              <Controller
                name="content"
                control={control}
                render={({ field }) => (
                  <TextField
                    placeholder="Enter content"
                    size="small"
                    fullWidth
                    multiline
                    rows={8}
                    {...field}
                  />
                )}
              />
            </Grid>
          </Grid>
          <Grid
            container
            item
            xs={12}
            justifyContent={"flex-end"}
            sx={{ paddingTop: "1rem" }}
          >
            <Button type="submit" disabled={formState.isSubmitting}>
              Submit
            </Button>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

export default CheckCareGapForm;
