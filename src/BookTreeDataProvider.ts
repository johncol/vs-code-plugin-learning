import * as vscode from 'vscode';

class BookGenre extends vscode.TreeItem {
  constructor(
    public readonly label: string,
    public readonly collapsibleState: vscode.TreeItemCollapsibleState
  ) {
    super(label, collapsibleState);
  }
}

class Book extends vscode.TreeItem {
  constructor(
    public readonly label: string
  ) {
    super(label, vscode.TreeItemCollapsibleState.None);
  }
}

type BookTreeItem = BookGenre | Book;

export class BookTreeDataProvider implements vscode.TreeDataProvider<BookTreeItem> {
  getTreeItem(element: BookGenre): vscode.TreeItem | Thenable<vscode.TreeItem> {
    return element;
  }

  getChildren(element?: BookTreeItem | undefined): vscode.ProviderResult<BookTreeItem[]> {
    if (element === undefined) {
      return [
        new BookGenre('Fiction', vscode.TreeItemCollapsibleState.Collapsed),
        new BookGenre('Non-Fiction', vscode.TreeItemCollapsibleState.Collapsed)
      ];
    }

    // level 2 -- Fiction
    if (element.label === 'Fiction') {
      return [
        new BookGenre('Fantasy', vscode.TreeItemCollapsibleState.Collapsed),
        new BookGenre('Sci-Fi', vscode.TreeItemCollapsibleState.None)
      ];
    }

    // level 2 -- Non-Fiction
    if (element.label === 'Non-Fiction') {
      return [
        new BookGenre('History', vscode.TreeItemCollapsibleState.None),
        new BookGenre('Science', vscode.TreeItemCollapsibleState.None)
      ];
    }

    // level 3 -- Fantasy
    if (element.label === 'Fantasy') {
      return [
        new Book('Enders Game'),
        new Book('Harry Potter')
      ];
    }

    return [];
  }
}
