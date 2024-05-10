using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Nodes;
using System.Threading.Tasks;

namespace Application.Extensions
{
	public static class ShuffleExtension
	{
		public static JsonArray Shuffle(this JsonArray array)
		{
			JsonArray arrayCopy = array.DeepClone().AsArray();
			JsonArray shuffledArray = [];

			int count = arrayCopy.Count;

			while (count > 0)
			{
				int i = Random.Shared.Next(count--);
				shuffledArray.Add(arrayCopy[i].DeepClone());
				arrayCopy.RemoveAt(i);
			}

			return shuffledArray;
		}

		public static List<T> Shuffle<T>(this List<T> list)
		{
			List<T> arrayCopy = list.ToList();
			List<T> shuffledArray = [];

			int count = arrayCopy.Count;

			while (count > 0)
			{
				int i = Random.Shared.Next(count--);
				shuffledArray.Add(arrayCopy[i]);
				arrayCopy.RemoveAt(i);
			}

			return shuffledArray;
		}
	}
}
