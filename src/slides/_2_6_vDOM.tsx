import { CodeBlock } from '@/components/CodeBlock'
import { CodeSandbox } from '@/components/CodeSandbox'
import { SlideHeading } from '@/components/Heading'

export const _2_6_vDOM = () => {
	return (
		<div className='flex flex-row gap-8'>
			<section>
				<SlideHeading level={2} subHeading='Chapter 2' heading='Virtual DOM' />
				<div className="flex flex-col gap-2 max-w-[70ch]">
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt volutpat interdum. Curabitur hendrerit aliquam auctor. Donec vestibulum ex eget pellentesque semper. Donec auctor bibendum erat, fermentum posuere mauris pulvinar ut.</p>
					<p>Nullam eu sapien euismod, sagittis neque sit amet, elementum risus.</p>
					<CodeBlock language='javascript'>
						{`const HelloWorld = () => <div>Hello World</div>;`}
					</CodeBlock>
				</div>
			</section>
			<CodeSandbox
				props={{
					files: {},
					theme: 'auto',
					template: 'nextjs',
					options: {
						editorHeight: "400px",
						editorWidthPercentage: 50,
					}
				}} />
		</div>
	)
}
