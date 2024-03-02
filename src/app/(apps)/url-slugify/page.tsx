'use client'

import * as React from 'react'
import {zodResolver} from '@hookform/resolvers/zod'
import {useForm} from 'react-hook-form'
import {z} from 'zod'
import {useCopyToClipboard} from 'react-use'

import {stringToSlug} from '@/utils/string-to-slug'
import {Button} from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {Input} from '@/components/ui/input'
import {RadioGroup, RadioGroupItem} from '@/components/ui/radio-group'
import {Switch} from '@/components/ui/switch'
import {Textarea} from '@/components/ui/textarea'
import {useToast} from '@/components/ui/use-toast'

const formSchema = z.object({
  input: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  type: z.enum(['-', '_'], {
    required_error: 'You need to select a separator type.',
  }),
  removeNumbers: z.boolean().default(false).optional(),
})

export default function Page() {
  const {toast} = useToast()
  const [output, setOutput] = React.useState<string>('')
  const [_, copyToClipboard] = useCopyToClipboard()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      input: '',
      type: '-',
      removeNumbers: false,
    },
  })

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const result = stringToSlug(values.input, values.type, values.removeNumbers)
    setOutput(result)
  }
  return (
    <div className="container mx-auto max-w-screen-lg">
      <h1 className="mb-20 text-center text-4xl font-bold">URL Slugify</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="input"
            render={({field}) => (
              <FormItem>
                <FormLabel>
                  Input string (article title, tutorial title or any web page
                  title)
                </FormLabel>
                <FormControl>
                  <Input placeholder="Input string here" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-start space-x-16">
            <FormField
              control={form.control}
              name="type"
              render={({field}) => (
                <FormItem className="space-y-3">
                  <FormLabel>Type of separator</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="-" />
                        </FormControl>
                        <FormLabel className="font-normal">Dash (-)</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="_" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          Underscore (_)
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="removeNumbers"
              render={({field}) => (
                <FormItem className="space-y-3">
                  <FormLabel className="text-sm font-medium">
                    Remove numbers
                  </FormLabel>
                  <FormControl className="block">
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </Form>
      <div className="mt-16 grid w-full gap-4">
        <Textarea placeholder="Output" className="resize-none" value={output} />
        <Button
          disabled={!output}
          onClick={() => {
            toast({
              title: 'Copied to clipboard',
              // description: 'Friday, February 10, 2023 at 5:57 PM',
            })
            copyToClipboard(output)
          }}
        >
          Copy
        </Button>
      </div>
    </div>
  )
}
