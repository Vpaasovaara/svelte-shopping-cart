<script lang="ts">
	import type { CartProduct } from '$lib/types';
	import { Trash } from 'phosphor-svelte';
	import Minus from 'phosphor-svelte/lib/Minus';
	import Plus from 'phosphor-svelte/lib/Plus';

	type Props = {
		cartProduct: CartProduct;
		removeItem: (id: string) => void;
	};

	let { cartProduct = $bindable(), removeItem }: Props = $props();
</script>

<div class="flex items-center justify-between py-2 border-b border-gray-200">
	<div class="flex items-center">
		<img
			src={cartProduct.product.thumbnail}
			alt="Product"
			class="size-12 object-cover rounded mr-4"
		/>
		<div>
			<p class="font-medium">{cartProduct.product.title}</p>
			<p class="text-sm">{cartProduct.product.price}</p>
		</div>
	</div>
	<div class="flex items-center">
		<button
			class="p-1 hover:bg-gray-200 rounded"
			aria-label="Subtract 1 from quantity"
			onclick={() => {
				if (cartProduct.quantity === 1) {
					removeItem(cartProduct.id);
				} else {
					cartProduct.quantity--;
				}
			}}
		>
			<Minus class="size-4" />
		</button>
		<span class="mx-2">{cartProduct.quantity}</span>
		<button
			class="p-1 hover:bg-gray-200 rounded"
			aria-label="Add 1 to quantity"
			onclick={() => cartProduct.quantity++}
		>
			<Plus class="size-4" />
		</button>
		<button
			onclick={() => removeItem(cartProduct.id)}
			class="ml-4 p-1 text-red-500 hover:bg-red-100 rounded"
		>
			<Trash class="size-4" />
		</button>
	</div>
</div>
