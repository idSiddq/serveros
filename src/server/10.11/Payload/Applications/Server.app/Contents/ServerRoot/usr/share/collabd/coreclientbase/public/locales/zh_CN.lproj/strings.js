// Copyright (c) 2009-2014 Apple Inc. All Rights Reserved.
// 
// IMPORTANT NOTE: This file is licensed only for use on Apple-branded
// computers and is subject to the terms and conditions of the Apple Software
// License Agreement accompanying the package this file is a part of.
// You may not port this file to another platform without Apple's written consent.
//
// IMPORTANT NOTE: This file is licensed only for use with the Wiki Server feature
// of the Apple Software and is subject to the terms and conditions of the Apple
// Software License Agreement accompanying the package this file is part of.

if (typeof apple_loc_strings == "undefined") {
	apple_loc_strings = {version:'1.0'};
}

var populateStrings = function(obj) {
	for (aProperty in obj) {
		apple_loc_strings[aProperty] = obj[aProperty];
	}
};

populateStrings({
	"_Loading": "正在载入…",
	"_UnsupportedBrowser.Warning": "您的浏览器不受支持。\n\n需要最新版本的 Safari、Chrome、Firefox 或 Internet Explorer 才能使用 OS X Server 上的 Wiki 服务器和 Xcode 服务器。您也可以从 iPod touch、iPhone 或 iPad 访问此页面。",
	"_Errors.403": "您没有阅读此页面的权限。",
	"_Errors.404": "找不到您正在查找的页面。",
	"_Errors.500": "发生意外错误。请尝试刷新此页面。",
	"_Errors.500DB": "数据库不可用。请联系您的管理员或稍后再试一次。",
	"_Errors.Calendar.Disabled": "日历已停止用于此服务器。请联系您的管理员以获取帮助。",
	"_Errors.Wiki.Calendar.Disabled": "日历已停用。此 Wiki 的所有者可以在“Wiki 设置”中启用“日历”。",
	"_Errors.Wiki.Calendar.Disabled.NonSSL": "日历要求安全的连接。请尝试使用安全的 URL 访问此页面，或联系您的管理员以获取帮助。",
	"_Errors.Wiki.Blog.Disabled": "博客已停用。此 Wiki 的所有者可以在“Wiki 设置”中启用“博客”。",
	"_OSXServer": "OS X Server",
	"_Loading": "正在载入…",
	"_General.Wikis": "Wiki",
	"_General.People": "联系人",
	"_General.Tags": "标记",
	"_General.All.Wikis": "所有 Wiki",
	"_General.All.People": "所有联系人",
	"_General.All.Tags": "所有标记",
	"_General.Documents": "文稿",
	"_General.No.Results.Found": "找不到结果",
	"_General.No.Wikis.Found": "找不到 Wiki",
	"_General.No.People.Found": "未找到联系人",
	"_General.Loading": "正在载入…",
	"_General.Navigation": "导航",
	"_General.Home": "主页",
	"_General.Profile": "个人资料",
	"_General.Error.NotFound": "找不到页面",
	"_General.Error.PermissionDenied": "权限被拒绝",
	"_General.Error.Unknown": "发生未知错误",
	"_General.Save": "存储",
	"_General.Cancel": "取消",
	"_Project.Default.Title": "未命名项目",
	"_Page.Default.Title": "未命名页面",
	"_Blog.Default.Title": "博客",
	"_Access.Role.own": "所有者",
	"_Access.Role.write": "读与写",
	"_Access.Role.read": "只读",
	"_Access.Role.none": "无访问权限",
	"_Access.User.unauthenticated": "所有未鉴定用户",
	"_Access.User.authenticated": "所有已登录的用户",
	"_Access.Remove": "移除",
	"_Access.Autocomplete.Placeholder": "在这里键入用户或群组的名称",
	"_General.Unread.Toggle.Title": "切换未读状态",
	"_General.Favorite.Toggle.Title": "开关个人收藏",
	"_General.Load.More": "载入更多…",
	"_General.No.Results.Found": "找不到结果",
	"_General.LastModified.Format": "“%@2”更新于“%@1”",
	"_General.LastActivity.Format": "上次活动时间 %@",
	"_General.Container.Subtitle.Wiki": "在“%@”Wiki 中",
	"_General.Container.Subtitle.User": "在“%@”的文稿中",
	"_General.Container.Subtitle.Blog": "在“%@”博客中",
	"_General.Container.Description": "描述",
	"_EntityTitle.PageTitle.Untitled": "未命名",
	"_EntityTitle.LastModified": "“%@2”更新于“%@1”",
	"_EntityTitle.LastModified.Unauthenticated": "未鉴定",
	"_FilterBarView.Filters.Everything.Title": "全部",
	"_FilterBarView.Filters.Everything.Tooltip": "显示全部",
	"_FilterBarView.Filters.Everywhere.Title": "所有位置",
	"_FilterBarView.Filters.Everywhere.Tooltip": "显示所有位置",
	"_FilterBarView.Filters.Deleted.Title": "已删除",
	"_FilterBarView.Filters.Deleted.Tooltip": "仅显示已删除的项目",
	"_FilterBarView.Filters.Unread.Title": "未读",
	"_FilterBarView.Filters.Unread.Tooltip": "仅显示未读项目",
	"_FilterBarView.Filters.Favorites.Title": "个人收藏",
	"_FilterBarView.Filters.Favorites.Tooltip": "仅显示个人收藏",
	"_FilterBarView.SortBy": "排序方式",
	"_FilterBarView.SortKeys.Rank.Title": "最相关的",
	"_FilterBarView.SortKeys.Rank.Tooltip": "最相关的项目排在最前面",
	"_FilterBarView.SortKeys.Title.Title": "标题",
	"_FilterBarView.SortKeys.Title.Tooltip": "按标题排序",
	"_FilterBarView.SortKeys.MostRecent.Title": "最近的",
	"_FilterBarView.SortKeys.MostRecent.Tooltip": "最新的项目显示在最前面",
	"_FilterBarView.SortKeys.LeastRecent.Title": "不是最近的",
	"_FilterBarView.SortKeys.LeastRecent.Tooltip": "最旧的项目显示在最前面",
	"_FilterBarView.Filter": "过滤器",
	"_QuickLook.Status.Preview.Loading": "正在载入预览…",
	"_QuickLook.Status.Preview.Missing": "这份文件没有预览。请再上传一次。",
	"_QuickLook.Thumbnail.Page.Count": "第 %@ 页（共 %@ 页）",
	"_QuickLook.Thumbnail.Scroll.Up": "显示上一个",
	"_QuickLook.Thumbnail.Scroll.Down": "显示下一个",
	"_Files.PreviewMissing": "没有可用的预览",
	"_Files.Pagination.Page.Count": "第 %@ 页（共 %@ 页）",
	"_Files.Pagination.Load.More": "载入更多…",
	"_Revisions.Controls.Cancel.Label": "取消",
	"_Revisions.Controls.Restore.Label": "恢复",
	"_Revisions.Controls.ShowChanges.Label": "显示更改",
	"_Revisions.Controls.HideChanges.Label": "隐藏更改",	
	"_AvatarEditor.UploadFailed": "未能上传图像。请再试一次。",
	"_AvatarEditor.Upload": "上传…",
	"_AvatarEditor.Replace": "替换…",
	"_Settings.Avatar.Projects.Label": "Wiki 图标",
	"_Settings.Avatar.People.Label": "我的图标",
	"_Settings.Avatar.UploadButton": "上传…",
	"_Settings.Avatar.ReplaceButton": "替换…",
	"_Settings.Avatar.DeleteButton": "删除",
	"_Settings.Avatar.Placeholder": "添加图像",
	"_Settings.Avatar.Remove": "移除图像",
	"_Settings.BannerImage.Label": "自定横幅",
	"_Settings.BannerImage.Help": "横幅图像高度应该是 124 个像素。",
	"_Settings.BackgroundImage.Label": "自定背景",
	"_Settings.Save.Progress.Message": "正在存储设置…",
	"_Settings.Save.Error.Message": "无法存储设置。请再试一次。",
	"_Files.Upload.Dialog.Title": "上传文件",
	"_Files.Upload.Dialog.Label": "文件",
	"_Files.Upload.Dialog.OK": "上传",
	"_Files.Progress.Uploading": "正在上传…",
	"_PlusMenu.Project.File": "将文件上传到“%@”…",
	"_PlusMenu.Private.File": "将文件上传到“我的文稿”…",
	"_Activity.No.Results.Found": "找不到活动",
	"_Activity.All": "所有活动",
	"_Activity.My" : "我的活动",
	"_Activity.None" : "无活动",
	"_Activity.ShortTitle" : "活动",
	"_Activity.More.Count.Singular": "1 个其他更新",
	"_Activity.More.Count.Plural": "%@ 个其他更新",
	"_Activity.More.Hide": "隐藏",
	"_Activity.MarkAllRead": "全部标记为已读",
	// User performed action Today at 12:00 PM
	"_Activity.Action.TagAdded": "“%@1”已标上“%@2”于%@3",
	"_Activity.Action.TagRemoved": "“%@1”已移除标记“%@2”于%@3",
	"_Activity.Action.EntityCreated": "“%@1”已创建于%@2",
	"_Activity.Action.EntityUpdated": "“%@1”已编辑于%@2",
	"_Activity.Action.EntityRenamed": "“%@1”已从“%@2”重新命名为“%@3”于%@4",
	"_Activity.Action.EntityRemoved": "“%@1”已于%@3删除“%@2”",
	"_Activity.Action.EntityMoved": "“%@1”已移到“%@2”于%@3",
	"_Activity.Action.RelationshipAdded": "“%@1”已于%@2%@3 建立关联",
	"_Activity.Action.RelationshipRemoved": "“%@1”已于%@2%@3 解除关联",
	"_Activity.Action.CommentAdded": "“%@1”已注释“%@2”于%@3",
	"_Activity.Action.CommentRemoved": "“%@1”已删除注释“%@2”于%@3",
	"_Activity.Action.CommentApproved": "“%@1”已批准注释“%@2”于%@3",
	"_Activity.Action.BlogEnabled": "“%@1”已启用博客“%@2”",
	"_Activity.Action.BlogDisabled": "“%@1”已停用博客“%@2”",
	"_Activity.Action.CalendarEnabled": "“%@1”已启用日历“%@2”",
	"_Activity.Action.CalendarDisabled": "“%@1”已停用日历“%@2”",
	"_Activity.Action.Coalesced.TagAdded": "“%@1”已添加 %@2 个标记于%@3",
	"_Activity.Action.Coalesced.TagRemoved": "“%@1”已移除 %@2 个标记于%@3",
	"_Activity.Action.Coalesced.EntityUpdated": "“%@1”已编辑 %@2 次于%@3",	
	"_Activity.Action.Coalesced.RelationshipAdded": "“%@1”已与 %@2 个文稿建立关联于%@3",
	"_Activity.Action.Coalesced.RelationshipRemoved": "“%@1”已解除与 %@2 个文稿的关联于%@3",
	"_Activity.Action.Coalesced.CommentAdded": "“%@1”已添加 %@2 项注释于%@3",
	"_Activity.Action.Coalesced.CommentRemoved": "“%@1”已移除 %@2 项注释于%@3",
	"_Activity.Action.Coalesced.CommentApproved": "“%@1”已批准 %@2 项注释于%@3",
	"_ActionMenu.Help.Title":"帮助",
	// Today at 12:00 PM
	"_DateTime.Unknown": "未知",
	"_DateTime.Format": "%@1%@2",
	"_DateTime.NoAt.Format": "%@2%@1时",
	"_DateTime.Short.Format": "%@1%@2",
	"_Date.Month.Names": "1月,2月,3月,4月,5月,6月,7月,8月,9月,10月,11月,12月",
	"_Date.Short.Month.Names": "1月,2月,3月,4月,5月,6月,7月,8月,9月,10月,11月,12月",
	"_Date.Day.Names": "星期日,星期一,星期二,星期三,星期四,星期五,星期六",
	"_Date.Short.Day.Names": "周日,周一,周二,周三,周四,周五,周六",
	"_Date.Today": "今天",
	"_Date.Yesterday": "昨天",
	"_Date.Tomorrow": "明天",
	"_Date.Unknown": "未知日期",
	// mm/dd/yyyy
	"_Date.Default.Format": "%@3/%@1/%@2",
	// Month Date
	"_Date.Short.Format": "%@1%@2日",
	// Month Date, Year
	"_Date.Long.Format": "%@3年%@1%@2日",
	"_Date.Long.WithTime.Format": "%@3年%@1%@2日%@4",
	"_Time.AM": "上午",
	"_Time.PM": "下午",
	// 7:30 AM
	"_Time.Default.Format": "%@3%@1:%@2",
	"_Time.Unknown": "未知时间",
	"_Duration.MoreThanADay": "超过 1 天",
	"_Duration.LessThanAMinute": "不到 1 分钟",
	"_Duration.SingleHourMinutes": "1 小时 %@ 分钟",
	"_Duration.SingleHourSingleMinutes": "1 小时 1 分钟",
	"_Duration.PluralHourMinutes": "%@1 小时 %@2 分钟",
	"_Duration.PluralHourSingleMinutes": "%@ 小时 1 分钟",
	"_Duration.Hours": "%@ 小时",
	"_Duration.Minutes": "%@ 分钟",
	"_Duration.Seconds": "%@ 秒钟",
	"_TimeDifference.SingleDaysAgo": "1 天前",
	"_TimeDifference.PluralDaysAgo": "%@ 天前",
	"_TimeDifference.SingleHoursAgo": "1 小时前",
	"_TimeDifference.PluralHoursAgo": "%@ 小时前",
	"_TimeDifference.SingleMinutesAgo": "1 分钟前",
	"_TimeDifference.PluralMinutesAgo": "%@ 分钟前",
	"_TimeDifference.LessThanAMinuteAgo": "刚才",
	"_TimeDifference.InSingleDays": "1 天后",
	"_TimeDifference.InPluralDays": "%@ 天后",
	"_TimeDifference.InSingleHours": "1 小时后",
	"_TimeDifference.InPluralHours": "%@ 小时后",
	"_TimeDifference.InSingleMinutes": "1 分钟后",
	"_TimeDifference.InPluralMinutes": "%@ 分钟后",
	"_Revisions.Progress.Loading.Document.History": "正在载入文稿历史…",
	"_Revisions.Progress.Loading.Revision": "正在载入修订的内容…",
	"_Revisions.Progress.Loading.Revision.Changes": "正在载入修订的内容…",
	"_Revisions.Notification.Revision.Changes.Failed": "未能获得所修订的内容",
	"_Revisions.Progress.Restoring.Document": "正在恢复以前的版本…",
	"_Revisions.Notification.Restore.Document.Success": "已成功恢复以前的版本",
	"_Revisions.Notification.Restore.Document.Failed": "未能恢复以前的版本。请再试一次。",
	"_Revisions.Placeholder.Empty.Revision": "空文稿",
	"_Revisions.Placeholder.No.Revisions.Found": "无历史记录项",
	"_Revisions.Attachment.Download.Tooltip": "将此附件下载到您的电脑。",
	"_Search.SearchResults": "搜索结果",
	"_Search.SearchResults.Keyword": "“%@”的搜索结果",
	"_Search.SavedSearch.Save": "存储搜索结果",
	"_Search.SavedSearch.Untitled": "未命名搜索",
	"_Search.SavedSearch.Save.Dialog.Title": "存储搜索结果",
	"_Search.SavedSearch.Save.Dialog.Label": "名称：",
	"_Search.SavedSearch.Save.Dialog.OK": "存储",
	"_Search.SavedSearch.Save.Dialog.Progress": "正在存储搜索结果…",
	"_Search.SavedSearch.Delete.Title": "删除已存储的搜索结果",
	"_Search.SavedSearch.Delete.Description": "您确定要永久删除此已存储的搜索结果吗？您不能撤销此操作。",
	"_Search.SavedSearch.Loading": "正在载入…",
	"_Search.SavedSearch.ErrorExecutingSearch": "执行存储的搜索结果时出错",
	"_Search.Show.More": "显示更多（%@）…",
	"_Search.Load.More": "载入更多…",
	"_Search.Owner.Title.Format": "在 %@ 中",
	"_Search.LastModified.Subtitle.Format": "“%@2”更新于“%@1”",
	"_Search.Tags.Subtitle": "标记：",
	"_Search.MultipleSnippet.Divider": "…",
	"_Editor.Apple.Copyright.Notice": "Copyright &copy; 2011-2014 Apple Inc. 保留一切权利。",
	"_Editor.Edit.Title": "编辑",
	"_Editor.Edit.Tooltip": "编辑此页",
	"_Editor.Save.Title": "存储",
	"_Editor.Save.Tooltip": "将您更改的内容存储到此页",
	"_Editor.Cancel.Title": "取消",
	"_Editor.Cancel.Tooltip": "撤销您对此页内容所做的任何更改",
	"_Editor.Undo.Title": "撤销",
	"_Editor.Undo.Tooltip": "撤销上次对此页面所做的更改",
	"_Editor.Delete.Block": "删除此内容",
	"_Editor.Delete.Block.Selected": "删除所选内容",
	"_Editor.Notifications.General.Error": "发生错误。请再试一次。",
	"_Editor.Notifications.Page.Saving": "正在存储更改的内容…",
	"_Editor.Notifications.Page.Checking.Status": "正在检查页面状态…",
	"_Editor.Notifications.Page.Checking.Status.Error": "存储此页面时发生错误。请再试一次。",
	"_Editor.Notifications.Page.Edit.LoginError": "您的会话已过期。请登录来编辑页面。",
	"_Editor.Notifications.Page.Saved.Error": "无法存储您更改的内容。请再试一次。",
	"_Editor.Notifications.Page.Saved.LoginError": "您的会话已过期。请登录来存储您的更改。",
	"_Editor.Unload.Warning": "不会存储此页上任何更改的内容。",
	// We have an explicit string here for cases where the browser does not automatically append the "Are you sure" text
	"_Editor.Unload.Full.Warning": "您确定要离开此页面吗？\n\n此页面上的任何更改都不会存储。",
	"_Editor.Toolbar.Empty.Placeholder": "工具栏是空的。",
	"_Editor.Toolbar.Block.Text.Title": "文本",
	"_Editor.Toolbar.Block.Text.Tooltip": "将文本添加到此页。",
	"_Editor.Toolbar.Block.File.Title": "文件",
	"_Editor.Toolbar.Block.File.Tooltip": "上传文件并将其添加到此页。",
	"_Editor.Toolbar.Block.Table.Title": "表格",
	"_Editor.Toolbar.Block.Table.Tooltip": "将表格添加到此页。",
	"_Editor.Toolbar.Block.Sandbox.Title": "HTML 摘录",
	"_Editor.Toolbar.Block.Sandbox.Tooltip": "将 HTML 摘录添加到此页。",
	"_Editor.Block.Debug": "[调试]",
	"_Editor.Block.Text.Toolbar.Formatting.Title": "格式",
	"_Editor.Block.Text.Toolbar.Formatting.Tooltip": "显示文本的格式选项。",
	"_Editor.Block.Text.Toolbar.Formatting.Paragraph.Title": "段落",
	"_Editor.Block.Text.Toolbar.Formatting.Paragraph.Tooltip": "将文本设为段落。",
	"_Editor.Block.Text.Toolbar.Formatting.BlockQuote.Title": "块引用",
	"_Editor.Block.Text.Toolbar.Formatting.BlockQuote.Tooltip": "将文本设为引用。",
	"_Editor.Block.Text.Toolbar.Formatting.Monospace.Title": "等宽",
	"_Editor.Block.Text.Toolbar.Formatting.Monospace.Tooltip": "使文本等宽。",
	"_Editor.Block.Text.Toolbar.Formatting.LargeHeader.Title": "大标头",
	"_Editor.Block.Text.Toolbar.Formatting.LargeHeader.Tooltip": "将文本设为大标头。",
	"_Editor.Block.Text.Toolbar.Formatting.MediumHeader.Title": "中等标头",
	"_Editor.Block.Text.Toolbar.Formatting.MediumHeader.Tooltip": "将文本设为中标头。",
	"_Editor.Block.Text.Toolbar.Formatting.SmallHeader.Title": "小标头",
	"_Editor.Block.Text.Toolbar.Formatting.SmallHeader.Tooltip": "将文本设为小标头。",
	"_Editor.Block.Text.Toolbar.Style.Title": "样式",
	"_Editor.Block.Text.Toolbar.Style.Tooltip": "文本的样式选项。",
	"_Editor.Block.Text.Toolbar.Style.Plain.Title": "纯文本",
	"_Editor.Block.Text.Toolbar.Style.Plain.Tooltip": "无样式。",
	"_Editor.Block.Text.Toolbar.Style.Bold.Title": "粗体",
	"_Editor.Block.Text.Toolbar.Style.Bold.Tooltip": "设为粗体字。",
	"_Editor.Block.Text.Toolbar.Style.Italic.Title": "斜体",
	"_Editor.Block.Text.Toolbar.Style.Italic.Tooltip": "设为斜体字。",
	"_Editor.Block.Text.Toolbar.Style.Underline.Title": "下划线",
	"_Editor.Block.Text.Toolbar.Style.Underline.Tooltip": "给文字加下划线。",
	"_Editor.Block.Text.Toolbar.Style.Important.Title": "重要",
	"_Editor.Block.Text.Toolbar.Style.Important.Tooltip": "强调文本重要性。",
	"_Editor.Block.Text.Toolbar.Style.Emphasis.Title": "强调",
	"_Editor.Block.Text.Toolbar.Style.Emphasis.Tooltip": "强调显示文本。",
	"_Editor.Block.Text.Toolbar.Style.Highlight.Title": "高亮显示",
	"_Editor.Block.Text.Toolbar.Style.Highlight.Tooltip": "高亮显示文本。",
	"_Editor.Block.Text.Style.Plain.Title": "纯文本",
	"_Editor.Block.Text.Style.Plain.Description": "没有样式的文本。",
	"_Editor.Block.Text.Style.Bold.Title": "粗体",
	"_Editor.Block.Text.Style.Bold.Description": "粗体文本。",
	"_Editor.Block.Text.Style.Italic.Title": "斜体",
	"_Editor.Block.Text.Style.Italic.Description": "斜体文本。",
	"_Editor.Block.Text.Style.Underline.Title": "带下划线",
	"_Editor.Block.Text.Style.Underline.Description": "带下划线的文本。",
	"_Editor.Block.Text.Style.Important.Title": "重要",
	"_Editor.Block.Text.Style.Important.Description": "极其重要的文本。",
	"_Editor.Block.Text.Style.Emphasis.Title": "强调",
	"_Editor.Block.Text.Style.Emphasis.Description": "强调显示的文本。",
	"_Editor.Block.Text.Style.Highlight.Title": "高亮显示",
	"_Editor.Block.Text.Style.Highlight.Description": "高亮显示的文本。",
	"_Editor.Block.Text.Toolbar.Alignment.Title": "对齐",
	"_Editor.Block.Text.Toolbar.Alignment.Tooltip": "文本的对齐选项。",
	"_Editor.Block.Text.Toolbar.Alignment.Left.Title": "左对齐",
	"_Editor.Block.Text.Toolbar.Alignment.Left.Tooltip": "文本向左对齐。",
	"_Editor.Block.Text.Toolbar.Alignment.Right.Title": "右对齐",
	"_Editor.Block.Text.Toolbar.Alignment.Right.Tooltip": "文本向右对齐。",
	"_Editor.Block.Text.Toolbar.Alignment.Center.Title": "中",
	"_Editor.Block.Text.Toolbar.Alignment.Center.Tooltip": "文本居中。",
	"_Editor.Block.Text.Toolbar.Alignment.Justify.Title": "两端对齐",
	"_Editor.Block.Text.Toolbar.Alignment.Justify.Tooltip": "文本两端对齐（分别向左右两边对齐）。",
	"_Editor.Block.Text.Toolbar.Link.Title": "链接",
	"_Editor.Block.Text.Toolbar.Link.Tooltip": "将链接添加另一页或外部 URL。",
	"_Editor.Block.Text.Toolbar.List.Style.Title": "列表",
	"_Editor.Block.Text.Toolbar.List.Style.Tooltip": "将文本变成列表。",
	"_Editor.Block.Text.Toolbar.List.Style.Bulleted.Title": "• 项目符号",
	"_Editor.Block.Text.Toolbar.List.Style.Bulleted.Tooltip": "设为项目符号列表。",
	"_Editor.Block.Text.Toolbar.List.Style.Numbered.Title": "1. 数字编号",
	"_Editor.Block.Text.Toolbar.List.Style.Numbered.Tooltip": "设为编号列表。",
	"_Editor.Block.Text.Toolbar.List.Style.None.Title": "无",
	"_Editor.Block.Text.Toolbar.List.Style.None.Tooltip": "移除列表格式。",
	"_Editor.Block.Text.Toolbar.List.Indentation.Title": "缩进",
	"_Editor.Block.Text.Toolbar.List.Indentation.Tooltip": "列表的缩进选项。",
	"_Editor.Block.Text.Toolbar.List.Indentation.Indent.Title": "缩进",
	"_Editor.Block.Text.Toolbar.List.Indentation.Indent.Tooltip": "增加此列表项的缩进。",
	"_Editor.Block.Text.Toolbar.List.Indentation.Outdent.Title": "减少缩进",
	"_Editor.Block.Text.Toolbar.List.Indentation.Outdent.Tooltip": "降低此列表项的缩进。",
	"_Editor.Links.Toolbar.Popup.New.Title": "新页面…",
	"_Editor.Links.Toolbar.Popup.New.Tooltip": "创建并链接新网页。",
	"_Editor.Links.Toolbar.Popup.Search.Title": "搜索…",
	"_Editor.Links.Toolbar.Popup.Search.Tooltip": "搜索并链接到现有页面或文件。",
	"_Editor.Links.Toolbar.Popup.Manual.Title": "链接…",
	"_Editor.Links.Toolbar.Popup.Manual.Tooltip": "创建至外部 URL 的链接。",
	"_Editor.Links.Toolbar.Popup.Unlink.Title": "取消链接",
	"_Editor.Links.Toolbar.Popup.Unlink.Tooltip": "从页面移除现有链接。",
	"_Editor.Links.Toolbar.Popup.ChangeTargetSelf.Title": "内部链接",
	"_Editor.Links.Toolbar.Popup.ChangeTargetSelf.Tooltip": "在同一页面中打开链接。",
	"_Editor.Links.Toolbar.Popup.ChangeTargetBlank.Title": "外部链接",
	"_Editor.Links.Toolbar.Popup.ChangeTargetBlank.Tooltip": "在新页面中打开链接。",
	"_Editor.Links.Toolbar.Popup.Recents": "最近使用的项目",
	"_Editor.Links.Toolbar.Popup.Recents.None.Placeholder": "无最近使用的项目",
	"_Editor.Links.Dialog.Add": "添加",
	"_Editor.Links.Dialog.Cancel": "取消",
	"_Editor.Links.Dialog.Manual.Title": "链接",
	"_Editor.Links.Dialog.Manual.Description": "键入链接的 URL 和名称。",
	"_Editor.Links.Dialog.Manual.Label.URL": "URL：",
	"_Editor.Links.Dialog.Manual.Label.LinkText": "链接文本：",
	"_Editor.Links.Dialog.Manual.Label.Target.Blank": "在新窗口中打开",			
	"_Editor.Block.Text.Placeholder": "用您自己的内容来替换此文本",
	"_Editor.Block.Text.Debug.Dialog.Title": "文本块调试模式",
	"_Editor.Block.Text.Debug.Dialog.HTML.Label": "原始 HTML",
	"_Editor.Block.Text.Debug.Dialog.Formatting.Label": "格式",
	"_Editor.Block.Text.Debug.Dialog.Alignment.Label": "对齐",
	"_Editor.Block.Text.Debug.Dialog.Properties.Label": "属性",
	"_Editor.Block.Text.Debug.Dialog.Cancel": "取消",
	"_Editor.Block.Text.Debug.Dialog.Update": "更新",
	"_Editor.Block.Text.Debug.CopyPaste.Title": "文本块拷贝/粘贴调试控制台",
	"_Editor.Block.Text.Debug.CopyPaste.Clear.Title": "清除",
	"_Editor.Block.Text.Debug.CopyPaste.Clear.Tooltip": "清除这里来清除拷贝/粘贴调试面板。",
	"_Editor.Block.Text.Debug.CopyPaste.Toggle.Open.Title": "打开",
	"_Editor.Block.Text.Debug.CopyPaste.Toggle.Close.Title": "关闭",
	"_Editor.Block.Text.Debug.CopyPaste.Toggle.Tooltip": "点按这里来切换此面板。",
	"_Editor.Block.Text.Debug.CopyPaste.Clipboard.Label": "当前的拷贝/粘贴剪贴板",
	"_Editor.Block.Text.Debug.CopyPaste.Clipboard.Placeholder": "剪贴板为空",
	"_Editor.Block.Table.Toolbar.Title": "表格",
	"_Editor.Block.Table.Toolbar.Tooltip": "给页面添加新表格。",
	"_Editor.Block.Table.Toolbar.Adjust.Title": "添加/移除行/列",
	"_Editor.Block.Table.Toolbar.Adjust.Tooltip": "从此表格添加或移除行或列。",
	"_Editor.Block.Table.Toolbar.Add.Row.Title": "添加一行",
	"_Editor.Block.Table.Toolbar.Add.Row.Tooltip": "向此表格添加空白行。",
	"_Editor.Block.Table.Toolbar.Remove.Row.Title": "移除一行",
	"_Editor.Block.Table.Toolbar.Remove.Row.Tooltip": "从此表格移除一行。",
	"_Editor.Block.Table.Toolbar.Add.Column.Title": "添加一列",
	"_Editor.Block.Table.Toolbar.Add.Column.Tooltip": "向此表格添加空白列。",
	"_Editor.Block.Table.Toolbar.Remove.Column.Title": "移除一列",
	"_Editor.Block.Table.Toolbar.Remove.Column.Tooltip": "从此表格移除一列。",
	"_Editor.Block.Table.Toolbar.Settings.Title": "表格设置",
	"_Editor.Block.Table.Toolbar.Settings.Tooltip": "修改此表格的设置。",
	"_Editor.Block.Table.Dialog.Settings.Title": "表格设置",
	"_Editor.Block.Table.Dialog.Settings.Gridlines.Label": "显示表格网格线",
	"_Editor.Block.Table.Dialog.Settings.Alternating.Label": "备选行颜色",
	"_Editor.Block.Table.Dialog.Settings.OK": "更新",
	"_Editor.Block.Table.Dialog.Settings.Cancel": "取消",
	"_Editor.Block.Table.Popup.Column.Sort.Ascending.Title": "按升序排序",
	"_Editor.Block.Table.Popup.Column.Sort.Ascending.Tooltip": "表格依此列按升序排序。",
	"_Editor.Block.Table.Popup.Column.Sort.Descending.Title": "按降序排序",
	"_Editor.Block.Table.Popup.Column.Sort.Descending.Tooltip": "表格依此列按降序排序。",
	"_Editor.Block.Table.Popup.Column.Add.Before.Title": "在前面添加一列",
	"_Editor.Block.Table.Popup.Column.Add.Before.Tooltip": "在此列前面添加空白列。",
	"_Editor.Block.Table.Popup.Column.Add.After.Title": "在后面添加一列",
	"_Editor.Block.Table.Popup.Column.Add.After.Tooltip": "在此列后面添加空白列。",
	"_Editor.Block.Table.Popup.Column.Delete.Title": "删除一列",
	"_Editor.Block.Table.Popup.Column.Delete.Tooltip": "删除此列。",
	"_Editor.Block.Table.Popup.Column.Header.Title": "标题列",
	"_Editor.Block.Table.Popup.Column.Header.Tooltip": "将标题列的格式应用于此表格列。",
	"_Editor.Block.Table.Popup.Row.Add.Above.Title": "在上面添加一行",
	"_Editor.Block.Table.Popup.Row.Add.Above.Tooltip": "在此行上面添加空白行。",
	"_Editor.Block.Table.Popup.Row.Add.Below.Title": "在下面添加一行",
	"_Editor.Block.Table.Popup.Row.Add.Below.Tooltip": "在此行下面添加空白行。",
	"_Editor.Block.Table.Popup.Row.Delete.Title": "删除一行",
	"_Editor.Block.Table.Popup.Row.Delete.Tooltip": "删除此行。",
	"_Editor.Block.Table.Popup.Row.Header.Title": "标题行",
	"_Editor.Block.Table.Popup.Row.Header.Tooltip": "将标题行的格式应用于此表格行。",
	"_Editor.Block.Table.Dialog.Delete.Title": "删除表格",
	"_Editor.Block.Table.Dialog.Delete.Description": "您确定要永久删除此表格吗？您将无法撤销此操作。",
	"_Editor.Block.Table.Dialog.Delete.OK": "删除",
	"_Editor.Block.Sandbox.Markup.Description": "键入或粘贴一些 HTML 标记来开始使用。",
	"_Editor.Block.Sandbox.Edit.MatchStyle.Label": "匹配样式",
	"_Editor.Block.Sandbox.Edit.MatchStyle.Tooltip": "使此 HTML 摘录的内容匹配页面样式。",
	"_Editor.Block.Sandbox.Edit.MatchStyle.Dialog.Title": "匹配样式",
	"_Editor.Block.Sandbox.Edit.MatchStyle.Dialog.Description": "您确定要使此 HTML 摘录的内容匹配页面样式吗？原始的 HTML 摘录将会被移除。",
	"_Editor.Block.Sandbox.Edit.MatchStyle.Dialog.OK": "匹配样式",
	"_Editor.Block.Sandbox.Edit.Done.Label": "完成",
	"_Editor.Block.Sandbox.Dialog.Delete.Title": "删除 HTML 摘录",
	"_Editor.Block.Sandbox.Dialog.Delete.Description": "您确定要永久删除此 HTML 摘录吗？您将无法撤销此操作。",
	"_Editor.Block.File.Uploaded.Error": "未能上传您的文件。请再试一次。",
	"_Editor.Block.Attachment.Download.Label": "下载附件。",
	"_Editor.Block.Attachment.Remove.Label": "移除附件。",
	"_Editor.Block.Attachment.QuickLook.Label": "快速查看附件。",
	"_Editor.Block.Attachment.Dialog.Delete.Title": "删除附件",
	"_Editor.Block.Attachment.Dialog.Delete.Description": "您确定要永久删除此附件吗？您将无法撤销此操作。",
	"_Editor.Block.Attachment.Quicklook": "快速查看", 
	"_Editor.Block.Image.Toolbar.Link.Title": "链接",
	"_Editor.Block.Image.Toolbar.Link.Tooltip": "将链接添加另一页或外部 URL。",
	"_Editor.Block.Image.Loading.Placeholder": "正在载入…",
	"_Editor.Block.Image.Dialog.Delete.Title": "删除图像",
	"_Editor.Block.Image.Dialog.Delete.Description": "您确定要永久删除此图像吗？您将无法撤销此操作。",
	"_Editor.Block.Media.Preview.Missing": "无法预览此媒体文件。请再上传一次。",
	"_Editor.Block.Media.Dialog.Delete.Title": "删除媒体",
	"_Editor.Block.Media.Dialog.Delete.Description": "您确定要永久删除此媒体文件吗？您将无法撤销此操作。",
	"_Editor.Conflict.Edit.Outdated": "其他用户在您查看时已更新了此页面。点按“好”来刷新并编辑此页面。",
	"_Editor.Conflict.Save.Override": "其他用户在您开始编辑之后也更改了此页面。如果存储您编辑的内容，则会覆盖其他用户更改的内容。您确定要覆盖其他用户更改的内容吗？",
	"_Editor.Concurrent.Block.Locked.By": "“%@”正在编辑",
	"_Editor.Concurrent.Block.Created.By": "“%@”正在编辑这里…",
	"_Editor.Concurrent.Block.Updated.Edited.By": "“%@”已完成编辑。<span class='reveal'>显示更改的内容…</span>",
	"_Editor.Concurrent.Block.Updated.Created.By": "“%@”已添加了内容。<span class='reveal'>显示更改的内容…</span>",
	"_Editor.Concurrent.Block.Deleted.By": "“%@”已删除此内容。",
	"_Editor.Concurrent.Block.Locked.Error.LockStolen": "无法编辑此内容，因为“%@”正在编辑。",
	"_Editor.Concurrent.Block.Locked.Error.LockTimeout": "您太长时间处于不活跃的状态。其他用户可能已经编辑了此内容并覆盖了您更改的内容。",
	"_Editor.Concurrent.Page.Updated": "“%@”已更新此页。<span class='reveal'>显示更改的内容…</span>",
	"_Editor.Migration.Progress.Migrating": "正在更新页面…",
	"_Editor.Migration.Progress.CopyPaste": "正在载入…",
	"_Editor.Migration.Progress.MatchStyles": "正在载入…",
	"_Editor.Autosave.Restore.Unsaved.Changes.Dialog.Title": "未存储的更改内容",
	"_Editor.Autosave.Restore.Unsaved.Changes.Dialog.Description": "您之前对此页面的编辑似乎没有被存储。若要恢复此页面上更改的内容并继续编辑，请点按“恢复”。",
	"_Editor.Autosave.Restore.Unsaved.Changes.Dialog.OK": "恢复",
	"_Editor.Autosave.Restore.Progress.Restoring": "正在恢复更改的内容…",
	"_Editor.Version.Unsupported.Warning": "抱歉，无法编辑此页面，因为不支持用于创建此页面的 wiki 版本。您如果需要编辑此页面，请将其内容拷贝并粘贴到新的 wiki 页面或博客文章中，然后删除此页面。",
	"_GearMenu.Replace.File.Title": "替换文件…",
	"_GearMenu.Delete.Title": "删除…",
	"_GearMenu.Delete.Project.Title": "删除 Wiki…",
	"_GearMenu.Delete.Page.Title": "删除页面…",
	"_GearMenu.Delete.File.Title": "删除文件…",
	"_Dialogs.Delete.Title": "删除",
	"_Dialogs.Delete.Project.Title": "删除 Wiki",
	"_Dialogs.Delete.Page.Title": "删除页面",
	"_Dialogs.Delete.File.Title": "删除文件",
	"_Dialogs.Delete.Blog.Title": "删除博客文章",
	"_Dialogs.Delete.Main.Title": "删除主页面 (Wiki)",
	"_Dialogs.Delete.Description": "您确定要删除吗?",
	"_Dialogs.Delete.Page.Description": "您确定要删除此页面吗？",
	"_Dialogs.Delete.Blog.Description": "您确定要删除此博客文章吗？",
	"_Dialogs.Delete.File.Description": "您确定要删除此文件吗？",
	"_Dialogs.Delete.Project.Description": "您确定要删除此 Wiki 吗？",
	"_Dialogs.Delete.Main.Description": "如果删除主页面，则会删除整个 Wiki 及其所有页面。",
	"_Dialogs.Delete.OK": "删除",
	"_Dialogs.Delete.Permanently": "永久删除",
	"_Dialogs.Delete.Notification.Error": "发生错误。请再试一次。",
	"_Dialogs.Delete.Notification.NotDocumentOwner.Error": "只有所有者或管理员可以删除此文稿。",
	"_Dialogs.Delete.Notification.NotProjectOwner.Error": "只有本 wiki 的所有者或管理员才可删除此文稿。",
	
	"_Dialogs.Hide.Person.Title": "隐藏联系人",
	"_Dialogs.Hide.Person.Description": "您确定要隐藏此联系人吗？",
	"_Dialogs.Hide.OK": "隐藏",
	"_Dialogs.Hide.Notification.Error": "未能标记为隐藏。请再试一次。",
	"_Dialogs.Unhide.Person.Title": "取消隐藏联系人",
	"_Dialogs.Unhide.Person.Description": "您确定要取消隐藏此联系人吗？",
	"_Dialogs.Unhide.OK": "取消隐藏",
	"_Dialogs.Unhide.Notification.Error": "未能取消隐藏。请再试一次。",
	"_Dialogs.OK": "好",
	"_Dialogs.Cancel": "取消",
	"_Dialogs.Save": "存储",
	"_Dialogs.Done": "完成",
	"_Dialogs.LinkSearch.Search.Placeholder": "Wiki 名称, 页面标题或文件名",
	"_Dialogs.LinkSearch.Progress.Searching": "正在搜索…",
	"_Dialogs.LinkSearch.Title": "搜索现有页面或文件。",
	"_Dialogs.LinkSearch.Button.OK": "好",
	"_Dialogs.LinkSearch.Description": "键入现有页面或文件的名称，从列表中选中它，并点按“好”来创建新链接。",
	"_Dialogs.NoEmailSet.Title": "输入您的电子邮件地址",
	"_Dialogs.NoEmailSet.Description": "您没有电子邮件地址。若要接收通知电子邮件，您需要在帐户设置中配置电子邮件地址。",
	"_Dialogs.NoEmailSet.Settings": "设置…",
	"_Dialogs.NewPage.Title": "新建页面",
	"_Dialogs.NewPage.Label": "页面标题：",
	"_Dialogs.NewPage.Progress.Creating": "正在创建新页面…",
	"_Dialogs.NewPage.OK": "添加",
	"_Dialogs.NewPage.Progress.Failed": "未能创建新页面。请再试一次。",
	"_Dialogs.NewBlogpost.Title": "新建博客文章",
	"_Dialogs.NewBlogpost.Label": "标题：",
	"_Dialogs.NewBlogpost.Progress.Creating": "正在创建新的博客文章…",
	"_Dialogs.NewBlogpost.OK": "添加",
	"_Dialogs.NewBlogpost.Progress.Failed": "无法创建新博客文章。请再试一次。",
	"_Dialogs.CreateWikiNamed.NotAllowed": "您没有权限创建新的 Wiki。请尝试以其他用户登录。",
	// Do not localize these help links.
	"_Help.Desktop.URL": "https://help.apple.com/wikiuser/mac/5.0/",
	"_Help.iPad.URL": "https://help.apple.com/wikiuser/ipad/5.0/",
	"_Cookies.NoCookiesUnsupported": "必须启用 Cookie 才能使用此网站",
	"_Sharing.Sidebar.SharingWith":"共享给：",
	"_Sharing.Sidebar.Edit":"编辑",
	"_Sharing.Sidebar.EmptyPlaceholder":"未共享",
	// Format.js localization.
    "_Dates.Months": "1月,2月,3月,4月,5月,6月,7月,8月,9月,10月,11月,12月",
    "_Dates.LongMonths": "1月,2月,3月,4月,5月,6月,7月,8月,9月,10月,11月,12月",
    "_Dates.Weekdays": "周日,周一,周二,周三,周四,周五,周六,－",
    "_Dates.ShortWeekdays": "六,一,二,三,四,五,日",
    "_Dates.LongWeekdays": "星期日,星期一,星期二,星期三,星期四,星期五,星期六",
    "_Dates.AMPM": "上午,下午",
    "_Dates.DateFormats.MediumDate": "Y年Mj日",
    "_Dates.DateFormats.Hour": "a g时",
    "_Dates.DateFormats.HourAndMinutes": "g:i a",
    "_Dates.DateFormats.LongMonthAndYear":"Y年F",
    "_Dates.DateFormats.MediumDateAndShortTime":"Y年Mj日，ag:i",
    "_Dates.Noon":"正午",
	
	// WAI ARIA - Accessiblity
	"_Accessibility.Editor.AccessRoles": "访问角色",
	"_Accessibility.Button.UploadImage": "上传图像",
	"_Accessibility.Button.Delete": "删除图像",
	"_Accessibility.CheckboxFavorite": "个人收藏",
	"_Accessibility.Dialog.Title": "设置",
	"_Accessibility.Dialog.UploadFile": "选取文件",
	"_Accessibility.MenuBar.Filter": "过滤器",
	"_Accessibility.MenuBar.HistoryControls": "历史记录控制",
	"_Accessibility.View.BotList": "Bot 列表",
	"_Accessibility.View.ListView": "列表视图",
	"_Accessibility.View.SearchResult": "搜索结果",
	"_Accessibility.PopupMenu": "弹出式菜单"
});