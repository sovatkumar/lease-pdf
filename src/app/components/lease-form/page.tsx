"use client";

import { useForm, useFieldArray, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { PhoneInput } from "react-international-phone";
import { PhoneNumberUtil } from "google-libphonenumber";
import { toast } from "react-toastify";

const phoneUtil = PhoneNumberUtil.getInstance();

const furnishingItemSchema = z.object({
  item: z.string().min(1, "Item name required"),
  quantity: z
    .number()
    .min(1, "Quantity must be at least 1")
    .max(100, "Too many items"),
});

const leaseSchema = z.object({
  landlordName: z.string().min(2, "Landlord name is required"),
  AddressLine: z.string().min(3, "Address line is required"),
  city: z.string().min(2, "City is required"),
  state: z.string().min(2, "State is required"),
  zip: z
    .string()
    .min(5, "Zip code must be at least 5 digits")
    .max(10, "Invalid zip code"),
  leadBasedPaintPresence: z
    .string()
    .nullable()
    .refine((val) => val && val.trim() !== "", {
      message: "Please select one option for lead-based paint presence",
    }),
  recordAvailable: z
    .string()
    .nullable()
    .refine((val) => val && val.trim() !== "", {
      message: "Please select one option for Records and reports available",
    }),
  phone: z.string().refine(
    (val) => {
      try {
        const parsed = phoneUtil.parseAndKeepRawInput(val);
        return phoneUtil.isValidNumber(parsed);
      } catch {
        return false;
      }
    },
    { message: "Enter a valid phone number with correct country code" }
  ),

  tenants: z
    .string()
    .min(3, "At least one tenant name is required")
    .transform((s) =>
      s
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean)
    )
    .refine((arr) => arr.length > 0, {
      message: "At least one tenant name is required",
    })
    .refine((arr) => arr.length <= 10, {
      message: "No more than 10 tenants allowed",
    })
    .refine((arr) => arr.every((t) => /^[A-Za-z\s]+$/.test(t)), {
      message: "Tenant names can only contain letters and spaces",
    })
    .refine((arr) => arr.every((t) => t.length >= 3), {
      message: "Each tenant name must be at least 3 characters long",
    })
    .transform((arr) => arr.join(", ")),

  rent: z.string().min(1, "Rent is required"),
  securityDeposit: z.string().min(1, "Security deposit is required"),
  startDate: z.string().min(1, "Start Date is required"),
  endDate: z.string().min(1, "End Date is required"),
  furnishings: z
    .array(furnishingItemSchema)
    .min(1, "At least one furnishing item required"),
});

type LeaseFormData = z.infer<typeof leaseSchema>;

export default function LeaseForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    control,
  } = useForm<LeaseFormData>({
    resolver: zodResolver(leaseSchema),
    defaultValues: {
      furnishings: [{ item: "", quantity: 1 }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "furnishings",
  });

  const onSubmit = async (data: LeaseFormData) => {
    try {
      const res = await fetch("/api/generate-pdf", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed to generate PDF");

      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "lease_agreement.pdf";
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.log(err,"error+++")
      toast.error((err as Error).message)
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 max-w-3xl my-8 mx-auto p-6 border rounded-lg bg-white dark:bg-transparent  dark:text-white shadow-sm"
    >
      <h2 className="text-xl font-semibold mb-2 text-center">
        Lease Agreement Form
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <input
            {...register("landlordName")}
            placeholder="Landlord Name"
            className="border p-2 rounded w-full dark:placeholder-white"
          />
          {errors.landlordName && (
            <p className="text-red-500 text-sm">
              {errors.landlordName.message}
            </p>
          )}
        </div>

        <div>
          <input
            {...register("AddressLine")}
            placeholder="Address Line"
            className="border p-2 rounded w-full dark:placeholder-white"
          />
          {errors.AddressLine && (
            <p className="text-red-500 text-sm">{errors.AddressLine.message}</p>
          )}
        </div>

        <div>
          <input
            {...register("city")}
            placeholder="City"
            className="border p-2 rounded w-full dark:placeholder-white"
          />
          {errors.city && (
            <p className="text-red-500 text-sm">{errors.city.message}</p>
          )}
        </div>

        <div>
          <input
            {...register("state")}
            placeholder="State"
            className="border p-2 rounded w-full dark:placeholder-white"
          />
          {errors.state && (
            <p className="text-red-500 text-sm">{errors.state.message}</p>
          )}
        </div>

        <div>
          <input
            {...register("zip")}
            placeholder="Zip Code"
            className="border p-2 rounded w-full dark:placeholder-white"
          />
          {errors.zip && (
            <p className="text-red-500 text-sm">{errors.zip.message}</p>
          )}
        </div>

        <Controller
          name="phone"
          control={control}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <div>
              <PhoneInput
                defaultCountry="in"
                value={value}
                onChange={(phone) => onChange(phone)}
                placeholder="Enter phone number with country code"
                className="border rounded-md"
                inputClassName="!border-none !h-[39px] w-full"
              />
              {error && <p className="text-red-500 text-sm">{error.message}</p>}
            </div>
          )}
        />

        <div className="md:col-span-2">
          <textarea
            {...register("tenants")}
            placeholder="Tenants (comma separated, max 10)"
            className="border p-2 rounded w-full h-20 dark:placeholder-white"
          />
          {errors.tenants && (
            <p className="text-red-500 text-sm">{errors.tenants.message}</p>
          )}
        </div>

        <div className="md:col-span-2">
          <input
            {...register("rent")}
            placeholder="Monthly Rent (e.g. $25000)"
            className="border p-2 rounded w-full dark:placeholder-white"
          />
          {errors.rent && (
            <p className="text-red-500 text-sm">{errors.rent.message}</p>
          )}
        </div>

        <div className="md:col-span-2">
          <input
            {...register("securityDeposit")}
            placeholder="Security Deposit (e.g. $25000)"
            className="border p-2 rounded w-full dark:placeholder-white"
          />
          {errors.securityDeposit && (
            <p className="text-red-500 text-sm">
              {errors.securityDeposit.message}
            </p>
          )}
        </div>

        <div className="md:col-span-2">
          <label>Start Date:</label>
          <input
            type="datetime-local"
            {...register("startDate")}
            className="border p-2 rounded w-full scheme-dark"
          />
          {errors.startDate && (
            <p className="text-red-500 text-sm">{errors.startDate.message}</p>
          )}
        </div>

        <div className="md:col-span-2">
          <label>End Date:</label>
          <input
            type="datetime-local"
            {...register("endDate")}
            className="border p-2 rounded w-full scheme-dark"
          />
          {errors.endDate && (
            <p className="text-red-500 text-sm">{errors.endDate.message}</p>
          )}
        </div>

        <div className="md:col-span-2">
          <label className="font-semibold">
            Presence of lead-based paint or lead-based paint hazards (check one
            below):
          </label>

          <div className="flex flex-col gap-2 mt-2">
            <label className="flex gap-3">
              <input
                type="radio"
                value="known"
                {...register("leadBasedPaintPresence")}
              />
              <p>
                Known lead-based paint and/or lead-based paint hazards are
                present in the housing (explain).
              </p>
            </label>

            <label className="flex gap-3">
              <input
                type="radio"
                value="noKnowledge"
                {...register("leadBasedPaintPresence")}
              />
              <p>
                Lessor has no knowledge of lead-based paint and/or lead-based
                paint hazards in the Housing.
              </p>
            </label>
          </div>
          {errors.leadBasedPaintPresence && (
            <p className="text-red-500 text-sm">
              {errors.leadBasedPaintPresence.message}
            </p>
          )}
        </div>

        <div className="md:col-span-2">
          <label className="font-semibold">
            Records and reports available to the lessor (check one below):
          </label>

          <div className="flex flex-col gap-2 mt-2">
            <label className="flex gap-3">
              <input
                type="radio"
                value="available"
                {...register("recordAvailable")}
              />
              <p>
                Lessor has provided the lessee with all available records and
                reports pertaining to lead based paint and/or lead-based paint
                hazards in the housing (list documents below)
              </p>
            </label>

            <label className="flex gap-3">
              <input
                type="radio"
                value="notAvailable"
                {...register("recordAvailable")}
              />
              <p>
                Lessor has no reports or records pertaining to lead-based paint
                and/or lead-based paint hazards in the housing
              </p>
            </label>
          </div>
          {errors.recordAvailable && (
            <p className="text-red-500 text-sm">
              {errors.recordAvailable.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <h3 className="font-semibold text-lg mb-2">Furnishings</h3>

        {fields.map((field, index) => (
          <div
            key={field.id}
            className="flex gap-2 mb-2 items-center border p-2 rounded"
          >
            <input
              {...register(`furnishings.${index}.item` as const)}
              placeholder="Item name (e.g. Sofa)"
              className="border p-2 rounded w-full dark:placeholder-white"
              required
            />
            <input
              type="number"
              min={1}
              {...register(`furnishings.${index}.quantity` as const, {
                valueAsNumber: true,
              })}
              placeholder="Qty"
              className="border p-2 rounded w-24 text-center"
            />
            <button
              type="button"
              onClick={() => remove(index)}
              className="text-red-500 hover:text-red-700"
            >
              ✕
            </button>
          </div>
        ))}

        {errors.furnishings && (
          <p className="text-red-500 text-sm mb-2">
            {errors.furnishings.message as string}
          </p>
        )}

        <button
          type="button"
          onClick={() => append({ item: "", quantity: 1 })}
          className="bg-gray-100 px-3 py-1 rounded dark:bg-gray-500 text-sm"
        >
          + Add Furnishing Item
        </button>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-60 cursor-pointer mt-4"
      >
        {isSubmitting ? "Generating PDF..." : "Generate & Download PDF"}
      </button>
    </form>
  );
}
